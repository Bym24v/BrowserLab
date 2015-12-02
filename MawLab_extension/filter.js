$(function () {
    var $result = $('#eventsResult');
    var url = "";

    $('#table').on('all.bs.table', function (e, name, args) {
        //console.log('Event:', name, ', data:', args);
    })
    .on('click-row.bs.table', function (e, row, $element) {
        //$result.text('Event: click-row.bs.table');

        url = row["url"];
        window.open(url, '_blank')
        //console.log(url);
    })
    .on('dbl-click-row.bs.table', function (e, row, $element) {
        //$result.text('Event: dbl-click-row.bs.table');
    })
    .on('sort.bs.table', function (e, name, order) {
        //$result.text('Event: sort.bs.table');
    })
    .on('check.bs.table', function (e, row) {
        //$result.text('Event: check.bs.table');
    })
    .on('uncheck.bs.table', function (e, row) {
        //$result.text('Event: uncheck.bs.table');
    })
    .on('check-all.bs.table', function (e) {
        //$result.text('Event: check-all.bs.table');
    })
    .on('uncheck-all.bs.table', function (e) {
        //$result.text('Event: uncheck-all.bs.table');
    })
    .on('load-success.bs.table', function (e, data) {
        //$result.text('Event: load-success.bs.table');
    })
    .on('load-error.bs.table', function (e, status) {
        //$result.text('Event: load-error.bs.table');
    })
    .on('column-switch.bs.table', function (e, field, checked) {
        //$result.text('Event: column-switch.bs.table');
    })
    .on('page-change.bs.table', function (e, size, number) {
        //$result.text('Event: page-change.bs.table');
    })
    .on('search.bs.table', function (e, text) {
        //$result.text('Event: search.bs.table');
    });
});
