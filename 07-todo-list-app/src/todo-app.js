import { LitElement, html, css } from 'lit-element';

import './components/todo-add';
import './components/todo-item';
import './components/todo-list';
import './components/eit-switch';

export class TodoApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 15px;
      }
    `;
  }

  constructor() {
    super();
    this.todos = [      
      // {
      //   name: 'tarea1',
      //   completed: false
      // },
      // {
      //   name: 'tarea dos',
      //   completed: false
      // },
      // {
      //   name: 'TREEEES',
      //   completed: true
      // },
    ];
  }

  render() {
    return html`
      <h1>Todo App</h1>     

      <todo-add
        @task-added=${ this.createTask }
      ></todo-add>
      <todo-list 
        .tasks=${ this.todos }
        @task-changed=${ this.taskChanged }
      ></todo-list>
    `;
  }

  createTask( e ) {
    // console.log(e.detail)
    const newTask = {
      uid: this.todos.length,
      name: e.detail,
      completed: false
    }
    this.todos = [...this.todos, newTask ];
  }

  taskChanged( e ) {
    const {task, state} = e.detail;
    // console.log( {task, state} );
    this.todos = this.todos.map( item => {
			if( item.uid == task.uid ) {
				return {
					...item,
					completed: state
				}
			} else {
				return item;
			}
		});
  }
}


customElements.define('todo-app', TodoApp);
