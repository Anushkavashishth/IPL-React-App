import { Table, Typography } from 'antd';
import BatsmanStatTable from './BatsmanStatTable';
import BowlerStatTable from './BowlerStatTable';


const AllRounderStatTable = ({ allrounders }) => {
    return (
        <>
            <BatsmanStatTable batsmen={allrounders} />
            <BowlerStatTable bowlers={allrounders} />
        </>


    )
    // console.log(allrounders,'rec')


    //     const columns = [
    //         {
    //             title: 'Runs',
    //             dataIndex: 'runs',
    //             key: 'runs',

    //           },
    //           {
    //             title: 'Batting Strike Rate',
    //             dataIndex: 'strikeRate',
    //             key: 'strikeRate',
    //           },
    //           {
    //             title: 'Batting Average',
    //             dataIndex: 'average',
    //             key: 'average',
    //           },
    //         {
    //           title: 'Wickets',
    //           dataIndex: 'wickets',
    //           key: 'wickets',
    //         },
    //         {
    //           title: 'Bowling Strike Rate',
    //           dataIndex: 'strikeRate',
    //           key: 'strikeRate',
    //         },
    //         {
    //           title: 'Bowling Average',
    //           dataIndex: 'average',
    //           key: 'average',
    //         },
    //         {
    //             title: 'Economy',
    //             dataIndex: 'economy',
    //             key: 'economy',
    //           },
    //       ];

    //     const data = [
    //         { key: '1', wickets: allrounders?.wickets, strikeRate: allrounders?.bowling_strike_rate, average: allrounders?.bowling_average ,economy: allrounders?.economy ,runs: allrounders?.runs, strikeRate: allrounders?.batting_strike_rate, average: allrounders?.batting_average},

    //       ];

    // return(
    //     <>
    //     <Typography.Title style={{ marginTop: '1.5rem', marginBottom:'1.5rem', fontStyle:'italic'}}>
    //     All Rounders Stats Table
    //             </Typography.Title>

    //     <Table style={{border: '16px',marginTop:50, marginBottom: 50 , marginLeft: 70 , marginRight: 70}}
    //   columns={columns}
    //   dataSource={data}
    //   pagination={false} 
    //   bordered
    //    />
    //     </>
    // )



}
export default AllRounderStatTable
