import BarChart from '../Charts/BarChart';

const ExpensesChart = ({ expenses }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Expenses Amount'
      }
    }
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const currentYearExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === 2021
  );
  const data = {
    labels,
    datasets: [
      {
        label: '2021',
        data: labels.map((month, index) =>
          currentYearExpenses.reduce(
            (accum, expense) =>
              expense.date.getMonth() === index
                ? accum + expense.amount
                : accum,
            0
          )
        ),
        backgroundColor: '#61DAFB'
      }
    ]
  };

  return <BarChart options={options} data={data} />;
};

export default ExpensesChart;
