"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[9851],{79851:(t,e,i)=>{i.r(e),i.d(e,{dyte_breakout_room_manager:()=>n,dyte_counter:()=>o,dyte_participants:()=>c});var a=i(94196),r=i(61070),s=i(7147);i(72559),i(55752),i(41969);const n=class{constructor(t){(0,a.r)(this,t),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.onParticipantDelete=(0,a.c)(this,"participantDelete",7),this.onParticipantsAdd=(0,a.c)(this,"participantsAdd",7),this.deleteRoom=(0,a.c)(this,"delete",7),this.updateRoom=(0,a.c)(this,"update",7),this.iconPack=s.d,this.t=(0,r.u)(),this.getPeer=t=>{var e;return null===(e=this.meeting.connectedMeetings.parentMeeting)||void 0===e?void 0:e.participants.find((e=>e.clientSpecificId===t))}}render(){var t,e,i,r,s;return(0,a.h)(a.H,null,(0,a.h)("div",{class:this.assigningParticipants?"assign-mode":"selector-mode"},(0,a.h)("div",{class:"header"},(0,a.h)("input",{placeholder:"Room Name",disabled:!this.room.isTitleEditorOpen,value:null!==(e=null===(t=this.room)||void 0===t?void 0:t.title)&&void 0!==e?e:`Room ${this.room.id+1}`,onChange:t=>{this.meeting.connectedMeetings.stateManager.renameConnectedMeeting(this.room.id,t.target.value)}}),(0,a.h)("dyte-tooltip",{label:this.t("Edit Room Name")},(0,a.h)("dyte-icon",{icon:this.room.isTitleEditorOpen?this.iconPack.checkmark:this.iconPack.edit,class:"show-on-hover",onClick:()=>{this.room.isTitleEditorOpen?this.meeting.connectedMeetings.stateManager.closeTitleEditorForConnectedMeeting(this.room.id):this.meeting.connectedMeetings.stateManager.openTitleEditorForConnectedMeeting(this.room.id)}})),(0,a.h)("div",null,(0,a.h)("dyte-tooltip",{label:this.t("Delete Room"),class:"danger"},(0,a.h)("dyte-icon",{icon:this.iconPack.delete,class:"show-on-hover",onClick:()=>{this.meeting.connectedMeetings.stateManager.deleteConnectedMeetings([this.room.id])}})),(0,a.h)("dyte-icon",{icon:this.iconPack.participants}),null!==(s=null===(r=null===(i=this.room)||void 0===i?void 0:i.participants)||void 0===r?void 0:r.length)&&void 0!==s?s:"0")),this.room.participants.length>0&&(0,a.h)("div",{class:"participant-list",onClick:()=>{this.onParticipantsAdd.emit()}},this.room.participants.map((t=>(0,a.h)("div",{class:"participant-item"},(0,a.h)("dyte-participant",{role:"listitem",key:t.id,meeting:this.meeting,participant:this.getPeer(t.clientSpecificId),view:"breakout-room-manager",onParticipantDelete:()=>{this.meeting.connectedMeetings.stateManager.unassignParticipants([t.clientSpecificId])}}))))),(this.assigningParticipants||this.room.participants.length<1)&&(0,a.h)("div",{class:"message-container"},(0,a.h)("p",{onClick:()=>{this.onParticipantsAdd.emit()}},this.assigningParticipants?"Click here to assign":"No participants assigned yet."))))}};n.style=".selector-mode,.assign-mode{position:relative;display:flex;flex-direction:column;align-items:center;margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);cursor:pointer;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);border-style:solid;border-color:#4c4c4c;max-height:120px !important;min-height:120px !important}.selector:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.show-on-hover{display:none}.header{margin-top:var(--dyte-space-1, 4px);display:flex;width:100%;flex-direction:row;align-items:center}.header dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);cursor:pointer}.header .danger{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.header .hide{display:none}.header div{display:flex;flex-grow:1;flex-direction:row;align-items:center;justify-content:flex-end}.header input{border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-1, 4px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));outline:2px solid transparent;outline-offset:2px}.header input:disabled{overflow-x:visible;border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;padding:var(--dyte-space-0, 0px);font-size:14px;font-weight:700;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76));max-width:60px}.participant-list{display:grid;flex-grow:1;grid-template-columns:repeat(2, minmax(0, 1fr));gap:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);width:100%;overflow-y:auto;border-radius:var(--dyte-border-radius-sm, 4px)}.participant-list::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px)}.participant-list::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.participant-list::-webkit-scrollbar-track{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.participant-item{margin-right:var(--dyte-space-2, 8px);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;flex-grow:1;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}.participant-item:hover{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.selector-mode:hover .show-on-hover{display:flex}.message-container{position:absolute;margin:var(--dyte-space-0, 0px);display:flex;width:100%;padding:var(--dyte-space-0, 0px);top:30%;height:65%;bottom:5%}p{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);display:flex;flex-grow:1;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));border-style:dashed;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity))}.selector-mode:hover p{border-color:#4c4c4c}.assign-mode:hover p{border-color:rgba(var(--dyte-colors-brand-600, 13 81 253) / 0.5);background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.4)}.assign-mode p{-webkit-backdrop-filter:blur(12px) saturate(180%);backdrop-filter:blur(12px) saturate(180%)}";const o=class{constructor(t){(0,a.r)(this,t),this.onChange=(0,a.c)(this,"valueChange",7),this.input="1",this.iconPack=s.d}connectedCallback(){this.watchStateHandler(this.input),this.input=this.value.toString()}watchStateHandler(t){this.onChange.emit(t)}increment(){this.input=Math.max(parseInt(this.input)+1,0).toString()}decrement(){this.input=Math.max(0,parseInt(this.input)-1).toString()}render(){return(0,a.h)(a.H,null,(0,a.h)("dyte-button",{kind:"icon",variant:"ghost",onClick:()=>this.decrement()},(0,a.h)("dyte-icon",{icon:this.iconPack.subtract})),(0,a.h)("input",{type:"number",value:this.input,onInput:t=>{this.input=t.target.value}}),(0,a.h)("dyte-button",{kind:"icon",variant:"ghost",onClick:()=>this.increment()},(0,a.h)("dyte-icon",{icon:this.iconPack.add})))}static get watchers(){return{input:["watchStateHandler"]}}};o.style=":host{display:flex;flex-direction:row;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-1, 4px)}p{margin:var(--dyte-space-0, 0px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}input{margin:var(--dyte-space-0, 0px);width:var(--dyte-space-6, 24px);padding:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-sm, 1px);border-style:solid;border-color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));text-align:center;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px;outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{margin:var(--dyte-space-0, 0px);appearance:none;-webkit-appearance:none}";const c=class{constructor(t){(0,a.r)(this,t),this.onSelectedParticipantUpdate=(0,a.c)(this,"selectedParticipantUpdate",7),this.iconPack=s.d,this.view="sidebar",this.t=(0,r.u)(),this.unassignedParticipants=[],this.search="",this.participants=[],this.waitlistedParticipants=[],this.stageRequestedParticipants=[],this.updateStageRequestedParticipants=()=>{this.stageRequestedParticipants=this.meeting.participants.joined.toArray().filter((t=>"REQUESTED_TO_JOIN_STAGE"===t.webinarStageStatus))},this.onSearchInput=t=>{this.search=t.target.value},this.acceptWaitingRoomRequest=async t=>{await this.meeting.participants.acceptWaitingRoomRequest(t),this.updateStageRequestedParticipants()},this.acceptStageRequest=async t=>{const e=this.meeting.participants.joined.get(t);void 0!==e&&await e.acceptJoinStageRequest(),this.updateStageRequestedParticipants()},this.rejectStageRequest=async t=>{const e=this.meeting.participants.joined.get(t);void 0!==e&&await e.rejectRequestToJoinStage(),this.updateStageRequestedParticipants()},this.acceptAllStageRequest=async()=>{const t=this.meeting.participants.joined.toArray().filter((t=>"REQUESTED_TO_JOIN_STAGE"===t.webinarStageStatus)).map((t=>({id:t.id,requestToJoinType:"REQUEST_TO_PRESENT"})));await this.meeting.participants.acceptAllRequestToJoinStageRequests(t),this.updateStageRequestedParticipants()},this.acceptAllWaitingRoomRequests=async()=>{const t=this.waitlistedParticipants.map((t=>this.meeting.participants.acceptWaitingRoomRequest(t.id)));await Promise.all(t)},this.rejectWaitingRoomRequest=async t=>{await this.meeting.participants.rejectWaitingRoomRequest(t)},this.shouldShowWaitlist=()=>this.meeting.self.permissions.acceptWaitingRequests&&0!==this.waitlistedParticipants.length,this.shouldShowWebinarPresentRequest=()=>this.meeting.self.permissions.acceptPresentRequests&&this.stageRequestedParticipants.length>0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){null!=this.meeting&&(this.participantJoinedListener&&this.meeting.participants.joined.removeListener("participantJoined",this.participantJoinedListener),this.participantLeftListener&&this.meeting.participants.joined.removeListener("participantLeft",this.participantLeftListener),this.waitlistedParticipantJoinedListener&&this.meeting.participants.waitlisted.removeListener("participantJoined",this.waitlistedParticipantJoinedListener),this.waitlistedParticipantLeftListener&&this.meeting.participants.waitlisted.removeListener("participantLeft",this.waitlistedParticipantLeftListener),this.peerRequestToJoinStateListener&&this.meeting.participants.joined.removeListener("peerRequestToJoinStage",this.peerRequestToJoinStateListener),this.peerAcceptedToJoinStageListener&&this.meeting.participants.joined.removeListener("peerAcceptedToJoinStage",this.peerAcceptedToJoinStageListener),this.peerRejectedToJoinStageListener&&this.meeting.participants.joined.removeListener("peerRejectedToJoinStage",this.peerRejectedToJoinStageListener))}meetingChanged(t){null!=t&&(this.participants=[t.self,...t.participants.joined.toArray()],this.participantJoinedListener=t=>{this.participants.some((e=>e.id===t.id))||(this.participants=[...this.participants,t])},this.participantLeftListener=t=>{this.participants=this.participants.filter((e=>e.id!==t.id)),this.stageRequestedParticipants=this.stageRequestedParticipants.filter((e=>e.id!==t.id))},this.waitlistedParticipants=t.participants.waitlisted.toArray(),this.waitlistedParticipantJoinedListener=t=>{this.waitlistedParticipants.some((e=>e.id===t.id))||(this.waitlistedParticipants=[...this.waitlistedParticipants,t])},this.waitlistedParticipantLeftListener=t=>{this.waitlistedParticipants=this.waitlistedParticipants.filter((e=>e.id!==t.id))},this.peerRequestToJoinStateListener=({id:e})=>{this.stageRequestedParticipants=this.stageRequestedParticipants.filter((t=>t.id!=e));const i=t.participants.joined.get(e);void 0!==i&&this.stageRequestedParticipants.push(i)},this.peerAcceptedToJoinStageListener=({id:t})=>{this.stageRequestedParticipants=this.stageRequestedParticipants.filter((e=>e.id!=t))},this.peerRejectedToJoinStageListener=({id:t})=>{this.stageRequestedParticipants=this.stageRequestedParticipants.filter((e=>e.id!=t))},this.stageRequestedParticipants=this.participants.filter((t=>"REQUESTED_TO_JOIN_STAGE"===t.webinarStageStatus)),t.participants.joined.addListener("participantJoined",this.participantJoinedListener),t.participants.joined.addListener("participantLeft",this.participantLeftListener),t.participants.waitlisted.addListener("participantJoined",this.waitlistedParticipantJoinedListener),t.participants.waitlisted.addListener("participantLeft",this.waitlistedParticipantLeftListener),t.participants.joined.addListener("peerRequestToJoinStage",this.peerRequestToJoinStateListener),t.participants.joined.addListener("peerAcceptedToJoinStage",this.peerAcceptedToJoinStageListener),t.participants.joined.addListener("peerRejectedToJoinStage",this.peerRejectedToJoinStageListener))}getParticipants(){const t=this.search.trim();if("breakout-rooms-manager"===this.view){const e=this.meeting.connectedMeetings.stateManager.getUnassignedParticipants();return""===t?e:e.filter((e=>{var i;return(null!==(i=e.name)&&void 0!==i?i:e.id).toLowerCase().includes(t.toLowerCase())}))}return""===t?this.participants:this.participants.filter((e=>{var i;return(null!==(i=e.name)&&void 0!==i?i:e.id).toLowerCase().includes(t.toLowerCase())}))}render(){let t=this.getParticipants();const e=this.shouldShowWaitlist(),i=this.shouldShowWebinarPresentRequest();return(0,a.h)(a.H,null,"sidebar"===this.view&&(0,a.h)("div",{class:"heading-count",part:"heading-count"},this.t("In Call")," (",this.participants.length,")"),(0,a.h)("div",{class:"search",part:"search"},(0,a.h)("dyte-icon",{icon:this.iconPack.search,part:"search-icon"}),(0,a.h)("input",{type:"search",autocomplete:"off",placeholder:"Search",onInput:this.onSearchInput,part:"search-input"})),(0,a.h)("div",{class:"ctr scrollbar",part:"container"},"sidebar"===this.view&&i&&(0,a.h)("div",{class:"waiting-participants"},(0,a.h)("div",{class:"heading-count",part:"waitlisted-heading-count"},this.t("stage_request.header_title")," (",this.stageRequestedParticipants.length,")"),(0,a.h)("ul",{class:"participants",part:"waitlisted-participants"},this.stageRequestedParticipants.map((t=>(0,a.h)("li",{class:"waiting-participant",key:t.id},(0,a.h)("div",{class:"participant-details"},(0,a.h)("dyte-avatar",{participant:t,size:"sm"}),(0,a.h)("p",{class:"name",title:t.name},t.name)),(0,a.h)("div",{class:"waitlist-controls"},(0,a.h)("dyte-tooltip",{label:this.t("stage_request.deny_request"),variant:"secondary"},(0,a.h)("dyte-button",{variant:"secondary",kind:"icon",onClick:()=>this.rejectStageRequest(t.id)},(0,a.h)("dyte-icon",{class:"deny",icon:this.iconPack.dismiss}))),(0,a.h)("dyte-tooltip",{label:this.t("stage_request.accept_request"),variant:"secondary"},(0,a.h)("dyte-button",{variant:"secondary",kind:"icon",onClick:()=>this.acceptStageRequest(t.id)},(0,a.h)("dyte-icon",{class:"accept",icon:this.iconPack.checkmark})))))))),(0,a.h)("dyte-button",{class:"accept-all-button",variant:"secondary",kind:"wide",onClick:this.acceptAllStageRequest},this.t("stage_request.accept_all"))),"sidebar"===this.view&&e&&(0,a.h)("div",{class:"waiting-participants"},(0,a.h)("div",{class:"heading-count",part:"waitlisted-heading-count"},this.t("waitlist.header_title")," (",this.waitlistedParticipants.length,")"),(0,a.h)("ul",{class:"participants",part:"waitlisted-participants"},this.waitlistedParticipants.map((t=>(0,a.h)("li",{class:"waiting-participant",key:t.id},(0,a.h)("div",{class:"participant-details"},(0,a.h)("dyte-avatar",{participant:t,size:"sm"}),(0,a.h)("p",{class:"name",title:t.name},t.name)),(0,a.h)("div",{class:"waitlist-controls"},(0,a.h)("dyte-tooltip",{label:this.t("waitlist.deny_request"),variant:"secondary"},(0,a.h)("dyte-button",{variant:"secondary",kind:"icon",onClick:()=>this.rejectWaitingRoomRequest(t.id)},(0,a.h)("dyte-icon",{class:"deny",icon:this.iconPack.dismiss}))),(0,a.h)("dyte-tooltip",{label:this.t("waitlist.accept_request"),variant:"secondary"},(0,a.h)("dyte-button",{variant:"secondary",kind:"icon",onClick:()=>this.acceptWaitingRoomRequest(t.id)},(0,a.h)("dyte-icon",{class:"accept",icon:this.iconPack.checkmark})))))))),(0,a.h)("dyte-button",{class:"accept-all-button",variant:"secondary",kind:"wide",onClick:this.acceptAllWaitingRoomRequests},this.t("waitlist.accept_all"))),(0,a.h)("ul",{class:"participants",part:"participants"},t.map((t=>(0,a.h)("dyte-participant",{role:"listitem",key:t.id,meeting:this.meeting,participant:t,view:this.view}))),0===t.length&&(0,a.h)("div",{class:"empty-message",part:"empty-message"},this.search.length>0?this.t("Participant with specified name not found."):this.t("It looks like nobody is here.")))))}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{margin-top:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;flex-direction:column;font-family:var(--dyte-font-family, sans-serif);font-size:14px}input{font-family:var(--dyte-font-family, sans-serif)}*{box-sizing:border-box}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;height:var(--dyte-space-12, 48px);align-items:center;justify-content:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.ctr{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);box-sizing:border-box;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-0, 0px);padding-bottom:var(--dyte-space-0, 0px);overflow-y:auto;flex-grow:1;flex-basis:0}.search{position:-webkit-sticky;position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));margin-left:var(--dyte-space-3, 12px);margin-right:var(--dyte-space-3, 12px);margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px)}.search dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.search input{box-sizing:border-box;height:var(--dyte-space-9, 36px);width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.participants{margin-top:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px)}.heading-count{font-size:14px}.empty-message{margin-top:var(--dyte-space-10, 40px);margin-bottom:var(--dyte-space-10, 40px);text-align:center;font-size:14px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.waiting-participants .accept-all-button{margin-bottom:var(--dyte-space-6, 24px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.waiting-participant{display:flex;align-items:center;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.waiting-participant .participant-details{margin-right:auto;display:flex;align-items:center}.waiting-participant .participant-details dyte-avatar{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);flex-shrink:0;font-size:14px}.waiting-participant .participant-details .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1080px){.waiting-participant .participant-details .name{max-width:var(--dyte-space-40, 160px)}}.waiting-participant .waitlist-controls{display:flex}.waiting-participant .waitlist-controls dyte-button{margin-left:var(--dyte-space-2, 8px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px)}.waiting-participant .waitlist-controls dyte-icon.accept{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.waiting-participant .waitlist-controls dyte-icon.deny{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}"},61070:(t,e,i)=>{i.d(e,{g:()=>r,u:()=>s});var a=i(55752);const r=async t=>{if(null==t||"en"===t||""===t.trim())return a.d;try{const e=await fetch(`http://localhost:5000/${t}.json`);return e.ok?Object.assign({},a.d,await e.json()):a.d}catch(e){return a.d}},s=(t=a.d)=>e=>{var i;return null!==(i=t[e])&&void 0!==i?i:e}}}]);