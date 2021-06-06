import {Circle} from 'better-react-spinkit'

function Loading() {
    return (
        <center style={{display: 'grid', placeItems: 'center', height:'100vh'}}>
            <div>
                <img src="https://icons-for-free.com/iconfiles/png/512/NextJS-1324888744726908747.png" style={{marginBottom: 10}} height={200} alt="" />
                <Circle color="#57F573" size={60}/>
            </div>
        </center>
    )
}

export default Loading
