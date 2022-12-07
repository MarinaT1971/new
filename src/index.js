 import './index.html';
import './index.css';
import {Chart} from '../node_modules/chart.js/auto';
// import { getRelativePosition } from '../node_modules/chart.js/helpers';
// import { getDimensions } from './api';
import '../node_modules/flowbite/src/flowbite';
import moment from '../node_modules/moment/moment';


const mult = (a, b) => a * b;
console.log(mult (2,4));

moment.locale('ru');
let timeBlock = document.querySelector(".time");
let time = moment();
timeBlock.innerHTML = time.format('DD MMMM YYYY');

console.log(moment().format('DD MMMM'))

const myCtx = document.getElementById('myChart').getContext('2d');
// Chart.defaults.plugins.legend.position = "right";
const myChart = new Chart(myCtx, {
    type: 'pie',
    data: {
        labels: ['Dairy', 'Fruits', 'Lean meats', 'Vegetables', 'Whole grains'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Моя диаграмма',
                font: {size: '30px'},
            },
            legend: {
                display: true,
                position: 'right',
              },
            tooltip: {
                enabled: false
              },
        }
    }
});