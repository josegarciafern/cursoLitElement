import { LitElement, html, css } from 'lit-element';

import dbFirestore from './firebase/config';

import './users/user-list';
import './users/user-insert';
import '@dile/dile-button/dile-button';
import './firebase/firestore-collection';

export class FirestoreDemo extends LitElement {
  static get properties() {
    return {
      users: { type: Array },
    };
  }

  static get styles() {
    return css`
      /* :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--firestore-demo-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      } */
    `;
  }

  constructor() {
    super();
    this.users = [];
    // Get Cloud Firestore through Firebase from firebase/config.js
    this.db = dbFirestore;
    // this.getUsers();
  }

  render() {
    return html`

    <firestore-collection collection="users" @new-data="${this.saveUsers}"></firestore-collection>
     
     <user-insert 
        @user-insert="${this.userInsert}" 
     ></user-insert>

     <user-list 
        .users="${this.users}" 
        @delete-user="${this.deleteUser}"
        @user-edit="${this.editUser}"
      ></user-list>

      <hr>
      <!-- <button @click="${this.getUsersSnapshot}">Obten los datos una vez</button> -->
      <dile-button @click="${this.getUsersSnapshot}">Obten los datos una vez</dile-button>

    `;
  }

  // getUsers() {
  //   this.db.collection("users")
  //   .onSnapshot((querySnapshot) => {
  //       let users = [];
  //       querySnapshot.forEach((doc) => {
  //           let currentUser = doc.data();
  //           currentUser = {
  //             ...currentUser,
  //             id: doc.id
  //           }
  //           users.push(currentUser);
  //       });
  //       // console.log("Los usuarios son: ", users);
  //       this.users = users;
  //   });
  // }

  saveUsers(e) {
    this.users = e.detail;
  }

  getUsersSnapshot() {

    this.db.collection("users").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
  }

  userInsert( e ) {
    // console.log('userinsert', e.detail)
    this.db.collection("users").add(e.detail)
    .then(function(docRef) {
        // console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

  deleteUser( e ) {
    const user = e.detail;
    console.log(user)
    this.db.collection("users").doc(user.id).delete().then( () => {
      console.log("Document successfully deleted!");
    }).catch( error => {
        console.error("Error removing document: ", error);
    });
  }

  editUser(e) {
    const user = e.detail;
    const userRef = this.db.collection("users").doc(user.id);
    // user.id = null;
    delete user.id;
    console.log(user)
    return userRef.update(user)
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  }
  
}


customElements.define('firestore-demo', FirestoreDemo);
