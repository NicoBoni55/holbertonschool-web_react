import $ from 'jquery';
import './body.css';
import _ from 'lodash';

$('body').append(`
    <div id="container">
        <p>Dashboard data for the students</p>
        <button>Click here to get started</button>
        <p id="count"></p>
    </div>`);

function updateCounter() {
 let clickCount = 0;
 
    $('button').on('click', function () {
        clickCount++;
        $('#count').text(`${clickCount} clicks on the button`);
    })
}

const debouncedUpdateCounter = _.debounce(updateCounter, 500);
$('button').on('click', debouncedUpdateCounter);
