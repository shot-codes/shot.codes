import { readable, writable } from "svelte/store";
import { WebGLRenderTarget } from "three";
import { Page } from "$lib/types";

export const renderTarget = readable(new WebGLRenderTarget(720, 720));
export const activePage = writable(Page.Home);
