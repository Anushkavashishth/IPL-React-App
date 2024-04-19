import { Layout, Carousel, Image } from 'antd';


const { Content } = Layout;

const contentStyle = {
    // height: '160px',
    // lineHeight: '160px',
    // padding: '0 48px'
};

const HomePage = () => {

    return (
        <Content style={{ backgroundColor: 'black' }}>
            <div style={{
                padding: 10,
                minHeight: 380,
            }}>
                <Carousel autoplay>
                    <div>
                        <Image style={contentStyle} src="assets\home\crouselPhotos\C5.png" />
                    </div>
                    <div>
                        <Image style={contentStyle} src="assets\home\crouselPhotos\C4.png" />
                    </div>
                    <div>
                        <Image style={contentStyle} src="assets\home\crouselPhotos\C3.png" />
                    </div>
                    <div>
                        <Image style={contentStyle} src="assets\home\crouselPhotos\C2.png" />
                    </div>
                    <div>
                        <Image style={contentStyle} src="assets\home\crouselPhotos\C1.png" />
                    </div>
                </Carousel>

            </div>
        </Content>
    );
};

export default HomePage;

