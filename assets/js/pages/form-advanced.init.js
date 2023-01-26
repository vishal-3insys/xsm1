
document.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelectorAll("[data-trigger]");
    for (i = 0; i < e.length; ++i) {
        var a = e[i];
        new Choices(a, {
            placeholderValue: "This is a placeholder set in the config",
            searchPlaceholderValue: "This is a search placeholder"
        })
    }


    new Choices("#choices-multiple-remove-button", {
        removeItemButton: !0
    }),
        new Choices(document.getElementById("choices-multiple-groups")),
        new Choices(document.getElementById("choices-text-remove-button"), {
            delimiter: ",",
            editItems: !0,
            maxItemCount: 5,
            removeItemButton: !0
        }),
        new Choices("#choices-text-unique-values", {
            paste: !1,
            duplicateItemsAllowed: !1,
            editItems: !0
        }),
        new Choices("#choices-text-disabled", {
            addItems: !1,
            removeItems: !1
        }).disable()
});
flatpickr("#datepicker-range", { mode: "range", defaultDate: new Date });
flatpickr("#data-datepicker-basic", { defaultDate: new Date });