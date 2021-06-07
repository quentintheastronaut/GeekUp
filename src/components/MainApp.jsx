import React, {useState} from 'react'
import { Menu, Dropdown, Button} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import '../style/MainApp.css'


const { Panel } = Collapse;

const ans = {
    quest1: "Khi truy cập vào 1 trang web, đầu tiên trình duyệt sẽ truy cập đến mấy chủ DNS để biên dịch đỉa chỉ web dạng URL thành địa chỉ IP, nếu tìm thấy thì sẽ trả về địa chỉ IP đó. Sau đó, trình duyệt sử dụng địa chỉ IP đó để gữi một HTTP/HTTPS request tới server mà đang lưu trữ dữ liệu của trang web đó. Nếu server chấp thuận request thì sẽ gữi lại cho trình duyệt thông báo với mã 200 OK rồi bắt đầu truy xuất các mã HTML của web đó về trình duyệt. Sau đó trình duyệt nhận mã HTML rồi render thành trang web theo yêu cầu.Kết nối giữ trình duyệt và server được giữ cho đến khi ta đóng trình duyệt đó đi. ",
    quest2: [
          "Khi render website thì thứ tự truy vấn media cho từng loại thiết bị sẽ có sự khác nhau: ",
          "- Desktop First: các CSS dành cho các thiết bị lớn sẽ được ưu tiên render trước, sử dụng max-width và thay đổi độ rộng màn hình bé hơn hoặc bằng break point.",
          "- Mobile First: các CSS dành cho các thiết bị nhỏ sẽ được ưu tiên render trước, sử dụng min-width và thay đổi độ rộng màn hình lớn hơn hoặc bằng break point."
            ],
    quest3: "Khi 2 css selector cùng ứng với 1 element thì độ ưu tiên về style của element đó sẽ được áp dụng dựa trên đó ưu tiên của các loại css selector ứng với element đó. Cụ thể như sau:",
};




function MainApp() {

    const [quest,setQuest] = useState(1);

    function handleClick(questNumber){
        console.log(questNumber)
        setQuest(questNumber)
    }

    function callback(key) {
        console.log(key)
        setQuest(key[key.length - 1])
    }

    const menu = (
        <Menu>
          <Menu.Item>
              <Button onClick={() => handleClick(1)}>
                  Câu 1
              </Button>
          </Menu.Item>
          <Menu.Item>
              <Button onClick={() => handleClick(2)}>
                  Câu 2
              </Button>
          </Menu.Item>
          <Menu.Item>
              <Button onClick={() => handleClick(3)}>
                  Câu 3
              </Button>
          </Menu.Item>
        </Menu>
      );

    return (
        <div className="inner">
            <div>Đặng Nhật Quân</div>

            <div className="dropdown">
            <Dropdown overlay={menu}>
                <Button>
                    Câu {quest} <DownOutlined />
                </Button>
            </Dropdown>
            </div>
            

            <div className="collapse">
                <Collapse defaultActiveKey={['1']} activeKey={quest} onChange={(key)=>callback(key)}>
                    <Panel header="Câu 1: Khi truy cập vào một trang web trình duyệt sẽ làm gì ?" key="1">
                    <p>{ans.quest1}</p>
                    </Panel>
                    <Panel header="Câu 2: Sự khác nhau giữ Desktop First và Mobile First trong Web Responsive Implementation là gì ?" key="2">
                    <p>{ans.quest2[0]}</p>
                    <p>{ans.quest2[1]}</p>
                    <p>{ans.quest2[2]}</p>
                    </Panel>
                    <Panel header="Câu 3: Nếu có 2 CSS selector cùng ứng với 1 element thì style của selector nào sẽ được ưu tiên hơn ?" key="3">
                    <p>{ans.quest3}</p>
                    <p>Element selector {"<"} Class selector  {"<"} ID selector {"<"} Style Inline (theo thứ tự từ thấp đến cao)</p>
                    <p>Trong trường hợp nếu 2 css selector cùng 1 kiểu thì sẽ ghi đè các thuộc tính.</p>

                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

export default MainApp
