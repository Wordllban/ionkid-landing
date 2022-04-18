/// <reference types="react-scripts" />
declare module '*.jpg';
declare module '*.png';
declare module "*.svg" {
    const content: any;
    export = content;
}
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}