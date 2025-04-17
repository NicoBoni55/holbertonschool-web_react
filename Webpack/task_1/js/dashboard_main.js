import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
 let clickCount = 0;
 
    $('button').on('click', function () {
        clickCount++;
        $('#count').text(`${clickCount} clicks on the button`);
    })
}

const debouncedUpdateCounter = _.debounce(updateCounter, 500);
$('button').on('click', debouncedUpdateCounter);
