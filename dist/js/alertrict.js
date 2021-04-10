/*!
* alertrict v1.0.0
*/

const alertrict = (function () {
    "use strict";

    var $alert;
    var $actionButtons;
    var $body = document.getElementsByTagName("body")[0];

    var defaults = {
        showCancel: false,
        confirmText: "Continue",
        cancelText: "Cancel",
        destructive: false,
        animation: true
    }

    var userOptions = {};

    function _render() {
        var template = `
            <div class="alertrict alertrict-active${userOptions.animation === false ? `` : ` alertrict-animated`}">
            <div class="alertrict-backdrop"></div>
            <div class="alertrict-inner">
                <div class="alertrict-body">
                    ${userOptions.title ? `<p class="alertrict-title">${userOptions.title}</p>` : ``}
                    ${userOptions.text ? `<p class="alertrict-text">${userOptions.text}</p>` : ``}
                </div>
                <div class="alertrict-footer">
                    ${userOptions.showCancel ? `<button type="button" class="alertrict-footer-action" data-toggle="alertrict-action" data-value="0">${userOptions.cancelText || defaults.cancelText}</button>` : ''}
                    <button type="button" class="alertrict-footer-action ${userOptions.destructive ? `alertrict-footer-action-destructive` : ''}" data-toggle="alertrict-action" data-value="1">${userOptions.confirmText || defaults.confirmText}</button>
                </div>
            </div>
        </div>
        `;

        return $body.insertAdjacentHTML('beforeend', template);
    }

    function _inject() {
        if ($alert) $alert.remove();
        _render();
        $body.classList.add('alertrict-open');
        $alert = document.getElementsByClassName("alertrict")[0];
        $actionButtons = document.querySelectorAll('[data-toggle="alertrict-action"]');
    }

    function fire(options = {}) {
        userOptions = options;
        _inject();
        return new Promise((resolve) => {
            $actionButtons.forEach((val) => {
                val.addEventListener("click", (e) => {
                    $alert.classList.remove("alertrict-active");
                    $body.classList.remove('alertrict-open');
                    $alert.remove();
                    resolve({
                        isConfirmed: e.target.attributes["data-value"].value == 1 ? true : false
                    });
                });
            });
        });
    }

    return fire;
})();