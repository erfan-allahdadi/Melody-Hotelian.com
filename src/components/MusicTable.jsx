import React from "react";

import { Table } from 'antd';

const MusicTabel = ({columns, data}) => {
    return (
        <Table columns={columns} dataSource={data}/>
    )
}

export default MusicTabel;