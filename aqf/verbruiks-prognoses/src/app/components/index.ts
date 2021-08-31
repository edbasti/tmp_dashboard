import LayoutEl from './layout';
import DashboardEl from './dashboard';
import Chart from './chart'

// we need to manually export the imports again
// an ECMAScript proposal is coming, currently: stage 1
// https://github.com/tc39/proposal-export-default-from
export {
    DashboardEl,
    LayoutEl,
    Chart
};
