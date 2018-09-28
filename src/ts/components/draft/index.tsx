import * as React from "react";

/* DRAFT: TEXT EDITOR */

//Draftjs
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  SelectionState,
  ContentBlock,
  ContentState
} from "draft-js";

import { AppState } from "../../store";

import { getSelectedBlock } from "draftjs-utils";

import { isLastBlock, insertBlock } from "../common";

import { Icon } from "react-icons-kit";
import { bold, caretDown } from "react-icons-kit/fa/";

import { SafeWrapper } from "../common";

//Style Map
import createStyle from "../toolBar/inlineStyle";
import { EventEmitter } from "events";

//State to HTML
import { stateToHTML } from "draft-js-export-html";

//HTML to ContentBlock
import HtmlToDraft from "html-to-draftjs";

export interface DraftProps {
  appState?: AppState;

  setAppState?: (newState: any, callback?: () => void) => void;

  //Events
  on?: (
    eventName: string,
    handler: (appState: AppState, ...args: any[]) => void
  ) => EventEmitter;
  emit?: (eventName: string, ...args: any[]) => boolean;
}

export interface DraftState {
  width?: number;
  height: number;

  isResizeMouseDown: boolean;
  mouseOffsetY: number;
}

export default class Draft extends React.Component<DraftProps, DraftState> {
  state: DraftState;
  editor: Editor;
  draftEditor: HTMLDivElement;

  constructor(props: DraftProps) {
    super(props);
    this.state = {
      height: 150,
      isResizeMouseDown: false,
      mouseOffsetY: 0
    };
  }

  updateDraftEditor(newEditorState: EditorState) {
    //Update Editor State
    this.props.setAppState({ editorState: newEditorState });
  }

  componentDidMount() {
    //Choose weather to add new line at the End (So You could add more text after inserting a block or a style).
    console.log(
      "Editor: ",
      this.editor,
      document.querySelector("[data-contents=true]")
    );
    //Draft Childs Container (The Sub Container of all text and blocks get typed on the draft editor)
    let container = document.querySelector("[data-contents=true]");
    //Insert New Line After Last Item on the List (Last Children on the Container)
    let lastItem = container.children.item(container.children.length - 1);

    console.log(this.props.appState.editorState);

    //Register RETURN KEY HANDLER
    window.addEventListener("keydown", e => {
      switch (e.key) {
        case "Enter":
          //this.updateDraftEditor(insertBlock(this.props.appState.editorState));
          break;
      }
    });

    //Set Editor Reference on the Main State (AppState)
    this.props.setAppState({ editor: this.editor });
  }

  componentWillMount() {
    /* Resize Editor */
    document.addEventListener("mousemove", this.onResizeMouseMove.bind(this));
    document.addEventListener("mouseup", this.onResizeMouseUp.bind(this));
  }

  onResizeEditor(e: React.MouseEvent) {
    console.log(e.clientX, e.clientY);
    const currentHeight: number = parseInt(
      this.draftEditor.style.height.slice(
        0,
        this.draftEditor.style.height.indexOf("px")
      )
    );
    let height = e.clientY - currentHeight;

    this.draftEditor.style.height = height + "px";

    console.log("Height: ", height, currentHeight);
  }

  onResizeMouseDown(e: React.MouseEvent) {
    console.log("DOWN", e.currentTarget as HTMLElement);
    this.setState({
      isResizeMouseDown: true,
      mouseOffsetY: (e.currentTarget as HTMLElement).offsetTop - e.clientY
    });
  }

  onResizeMouseMove(e: React.MouseEvent) {
    e.preventDefault();
    if (this.state.isResizeMouseDown) {
      console.log("MOVING");
      console.log(e.clientX, e.clientY);
      const currentHeight: number = parseInt(
        this.draftEditor.style.height.slice(
          0,
          this.draftEditor.style.height.indexOf("px")
        )
      );
      console.log(this.state.mouseOffsetY);
      let height = e.clientY + this.state.mouseOffsetY;

      this.draftEditor.style.height = height + "px";

      console.log("Height: ", height, currentHeight);
    }
  }

  onResizeMouseUp() {
    console.log("UP");
    this.setState({ isResizeMouseDown: false });
  }

  onEditorFocus() {
    this.props.setAppState({ editorHasFocus: true });
  }

  onEditorBlur() {
    this.props.emit("EditorBlur");
    this.props.setAppState({ editorHasFocus: false });
  }

  onHTMLEditorChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    //Converting HTML to Draftjs
    const { contentBlocks, entityMap } = HtmlToDraft(e.target.value);
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const editorState = EditorState.createWithContent(contentState);
    //Apply New EditorState with New HTMl
    this.updateDraftEditor(editorState);
  }

  render() {
    //Quick Extract
    let { appState, setAppState } = this.props;
    //Get Inlines style for blocks
    const currentInlineStyles = createStyle.exporter(appState.editorState);
    //Convert it to plain HTML with inline styles
    const htmlCode = stateToHTML(appState.editorState.getCurrentContent(), {
      inlineStyles: currentInlineStyles
    });

    return (
      <SafeWrapper style={{ position: "relative", flexDirection: "column" }}>
        <div
          className="draft ip-scrollbar-v2"
          onClick={() =>
            !this.props.appState.showDraftHTML && this.editor.focus()
          }
          style={{ height: this.state.height }}
          ref={draft => (this.draftEditor = draft)}
        >
          {!this.props.appState.showDraftHTML && (
            <div className="draft-container">
              <Editor
                customStyleFn={createStyle.customStyleFn}
                editorState={appState.editorState}
                ref={editor => (this.editor = editor)}
                onChange={this.updateDraftEditor.bind(this)}
                onFocus={this.onEditorFocus.bind(this)}
                onBlur={this.onEditorBlur.bind(this)}
                placeholder="Explore You Way In..."
              />
            </div>
          )}
          {this.props.appState.showDraftHTML && (
            <div className="draft-html-container">
              <textarea
                name="draftHtml"
                id="draftHtml"
                className="ip-scrollbar-v2"
                defaultValue={htmlCode}
                onChange={this.onHTMLEditorChange.bind(this)}
              />
            </div>
          )}
        </div>
        <div className="draft-details">
          <div className="num-charachters">50</div>
          <div className="current-selected">Div</div>
        </div>
        <span
          className="draft-resizer"
          onMouseDown={this.onResizeMouseDown.bind(this)}
          onMouseUp={this.onResizeMouseUp.bind(this)}
        >
          <Icon icon={caretDown} size={20} />
        </span>
      </SafeWrapper>
    );
  }
}
