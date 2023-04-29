import Image from 'next/image';

function AboutContent() {
    
    return (<div><p>
        Hi! I am fractum and this is a blog for my fiction texts and articles about things I find interesting. I made this page mostly because I
        wanted to learn some react. Welcome here!    <Image src="/pix6.gif" width="20" height="30"/>
    </p>
    <hr/>
    <p><b>Credits:</b><br/>
    <br/>Some inspiration and styles from https://lostlove.neocities.org/ 
    <br/>
    <br/>Icons by aconfuseddragon
    <br/>And special Penguin for rescuing my code <Image src="/pix39.gif" width="20" height="20"/>
    </p>
    </div>
    );

};

export default AboutContent;