(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const m=document.querySelector("#form"),a=document.querySelector("#taskInput"),c=document.querySelector("#tasksList");let n=[];localStorage.getItem("tasks")&&(n=JSON.parse(localStorage.getItem("tasks")));n.forEach(t=>f(t));d();m.addEventListener("submit",g);c.addEventListener("click",p);c.addEventListener("click",k);function g(t){t.preventDefault();const s=a.value,i={id:Date.now(),text:s,done:!1};n.push(i),console.log(n),a.value="",a.focus(),u(),f(i),d()}function p(t){if(t.target.dataset.action!=="delete")return;const s=t.target.closest(".list-group-item"),i=Number(s.id);n=n.filter(r=>r.id!==i),s.remove(),console.log(n),u(),d()}function k(t){if(t.target.dataset.action!=="done")return;const s=t.target.closest(".list-group-item"),i=Number(s.id),r=n.find(e=>e.id===i);s.querySelector(".task-title").classList.toggle("task-title--done"),r.done=!r.done,u()}function d(){if(n.length===0&&c.insertAdjacentHTML("afterbegin",`<li id="emptyList" class="list-group-item empty-list">
      <img src="./img/greenclover.png" alt="Empty" width="48" class="mt-3">
      <div class="empty-list__title">Task list is empty</div>
    </li>`),n.length>0){const t=document.querySelector("#emptyList");t&&t.remove()}}function u(){localStorage.setItem("tasks",JSON.stringify(n))}function f(t){const s=t.done?"task-title task-title--done":"task-title",i=`
  <li id="${t.id}" class="list-group-item d-flex justify-content-between task-item">
  <span class="${s}">${t.text}</span>
  <div class="task-item__buttons">
    <button type="button" data-action="done" class="btn-action">
      <img src="./img/tick.svg" alt="Done" width="18" height="18">
    </button>
    <button type="button" data-action="delete" class="btn-action">
      <img src="./img/cross.svg" alt="Done" width="18" height="18">
    </button>
  </div>
  </li>
  `;c.insertAdjacentHTML("beforeend",i)}
