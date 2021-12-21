import { ResponsiveBar } from '@nivo/bar';

const BarComponent = ({ list }) => (
  <ResponsiveBar
    data={list}
    keys={[ 'age', 'contribution', 'value401K' ]}
    indexBy='age'
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.5}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    labelSkipWidth={32}
    labelSkipHeight={32}
    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'age',
        legendPosition: 'middle',
        legendOffset: 32
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '401 K Value',
        legendPosition: 'middle',
        legendOffset: -55
    }}
    barAriaLabel={function(e){return e.id+": "+e.formattedValue+" at age: "+e.indexValue}}
  />
)

export default BarComponent;