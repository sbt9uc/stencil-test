/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface CheckboxBold {
        /**
          * If the box is checked by default
         */
        "checked"?: boolean;
        /**
          * If the box box should be disabled
         */
        "disabled"?: boolean;
        /**
          * The unique Id
         */
        "id": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface RatingStars {
        "maxValue": number;
        "value": number;
    }
}
declare global {
    interface HTMLCheckboxBoldElement extends Components.CheckboxBold, HTMLStencilElement {
    }
    var HTMLCheckboxBoldElement: {
        prototype: HTMLCheckboxBoldElement;
        new (): HTMLCheckboxBoldElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLRatingStarsElement extends Components.RatingStars, HTMLStencilElement {
    }
    var HTMLRatingStarsElement: {
        prototype: HTMLRatingStarsElement;
        new (): HTMLRatingStarsElement;
    };
    interface HTMLElementTagNameMap {
        "checkbox-bold": HTMLCheckboxBoldElement;
        "my-component": HTMLMyComponentElement;
        "rating-stars": HTMLRatingStarsElement;
    }
}
declare namespace LocalJSX {
    interface CheckboxBold {
        /**
          * If the box is checked by default
         */
        "checked"?: boolean;
        /**
          * If the box box should be disabled
         */
        "disabled"?: boolean;
        /**
          * The unique Id
         */
        "id"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface RatingStars {
        "maxValue"?: number;
        "value"?: number;
    }
    interface IntrinsicElements {
        "checkbox-bold": CheckboxBold;
        "my-component": MyComponent;
        "rating-stars": RatingStars;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "checkbox-bold": LocalJSX.CheckboxBold & JSXBase.HTMLAttributes<HTMLCheckboxBoldElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "rating-stars": LocalJSX.RatingStars & JSXBase.HTMLAttributes<HTMLRatingStarsElement>;
        }
    }
}
