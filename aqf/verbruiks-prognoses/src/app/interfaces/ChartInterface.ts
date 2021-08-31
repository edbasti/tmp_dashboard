export interface DataSet {
    label: string;
    data: Array<number>,
    fill: Boolean,
    backgroundColor: string,
    borderColor: string,
}
export default interface ChartProps {
   labels: Array<string>;
   datasets: Array<DataSet>;
}