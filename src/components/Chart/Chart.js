import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataValues = props.data.map(data => data.value);
    const totalMax = Math.max(...dataValues);
    return (
        <div className="chart">
            {props.data.map((data) => (
                <ChartBar
                    key={data.label}
                    label={data.label}
                    value={data.value}
                    maxValue={totalMax}
                />
            ))}
        </div>
    );
};

export default Chart;
