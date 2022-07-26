import { LitElement, html, css } from "https://cdn.skypack.dev/lit";

import sheet from "./login-form.css" assert { type:"css" };


export default class loginForm extends LitElement {


    static properties = {
        
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        this.renderRoot.adoptedStyleSheets= [sheet];
    }

    render() {
        return html`
        <div class="login-box">
        <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="">
                    <label>Username</label>
                </div>
                <div class="user-box">
                    <input type="password" name="" required="">
                    <label>Password</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
        `
    }

}

customElements.define('login-form', loginForm);