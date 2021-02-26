/**
 * FeedBackMixin - Description for mixin
 * @polymerMixin
 * @mixinFunction
 */
export const FeedBackMixin = (SuperClass) => {
    return class extends SuperClass {
        sendFeedBack( msg ) {
            this.dispatchEvent(new CustomEvent('feedback-message', {
                bubbles: true,
                composed: true,
                detail: msg
            }));
        }
    }
}