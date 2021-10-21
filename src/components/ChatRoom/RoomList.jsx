import React from 'react';
import { Collapse, Typography, Button } from 'antd';
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
import { AppContext } from '../../context/AppProvider';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export default function RoomList() {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    React.useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header="List Room" key="1">
        {rooms.map((room) => (
          <LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>
            {room.name}
          </LinkStyled>
        ))}
        <Button
          type="text"
          icon={<PlusSquareOutlined />}
          className="add-room"
          onClick={handleAddRoom}
        >
          Add-Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

// import { PlusSquareOutlined } from '@ant-design/icons';
// import { Button, Collapse, Typography } from 'antd';
// import React, { useContext } from 'react';
// import styled from 'styled-components';
// import { AppContext } from '../../context/AppProvider';
// const PanelStyle = styled(Collapse.Panel)`
//   &&& {
//     .ant-collapse-header,
//     p {
//       color: white;
//     }
//     .ant-collapse-content-box {
//       padding: 0 40px;
//     }
//     .add-room {
//       color: white;
//       padding: 0;
//     }
//   }
// `;

// const LinkStyled = styled(Typography.Link)`
//   display: block;
//   margin-bottom: 5px;
//   color: 'white';
// `;
// function RoomList() {
//   const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
//     useContext(AppContext);
//   console.log(rooms);
//   const handleClick = () => {
//     setIsAddRoomVisible(true);
//   };
//   return (
//     <div>
//       <Collapse ghost defaultActiveKey={['1']}>
//         <PanelStyle header="Room List" key="1">
//           {rooms.map((room) => (
//             <LinkStyled
//               key={room.id}
//               style={{ color: 'white' }}
//               onClick={() => setSelectedRoomId(room.id)}
//             >
//               {room.name}
//             </LinkStyled>
//           ))}
//           <Button
//             type="text"
//             icon={<PlusSquareOutlined />}
//             className="add-room"
//             onClick={handleClick}
//           >
//             Add The Room
//           </Button>
//         </PanelStyle>
//       </Collapse>
//     </div>
//   );
// }

// export default RoomList;
