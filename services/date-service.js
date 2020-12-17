class DateService {
    get today() {
        var pad = function(num) { return ('00'+num).slice(-2) };
        var date;
        date = new Date();
        date = `${date.getUTCFullYear()}-${parseInt(pad(date.getUTCMonth())) + 1}-${pad(date.getUTCDate())} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`;
        console.log('The date', date);
        return date;
    }
}
module.exports = DateService;
