import gecipeHome from '/public/image/gecipe-home-page.png';
import gecipeAdmin from '/public/image/gecipe-admin.png';
import gecipeCoach from '/public/image/gecipe-coach.png';
import gecipeGame from '/public/image/gecipe-game.png';
import mediiHome from '/public/image/medii-home.png';
import mediiEConsult from '/public/image/medii-e-consult.png';
import motivist from '/public/image/motivist.webp';
import rz from '/public/image/rz.webp';

export const projectsData = [
    {
        id: 1,
        name: 'Gecipe Home Page Website',
        description: "Me and my team built a website for introducing the company. I have developed Front-end using HTML, CSS, Javascript, jquery and jquery-ui. Gecipe is a metaverse education company that provides educational content in the virtual world of e-sports. Through eSports, gecipe provide a “third educational opportunity” that is neither a school nor a cram school, and create a world where everyone can live their own life and make their own decisions.",
        tools: ['HTML', 'CSS', 'Javascript', 'jquery', 'jquery-ui'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: gecipeHome,
        url: 'https://gecipe.co.jp',
    },
    {
        id: 2,
        name: 'Gecipe Coach App',
        description: 'I have designed and developed a full-stack web app for management lessons of coach.  I created the UI using NextJS, Typescript, MUI, TailwindCSS, and React Slick. I developed the API using NestJS, Typescript, PostgreSql, OpenApi, Monorepo and firebase. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "NestJS", "TypeScript", "PostgreSql", "AWS S3", "Firebase", "OIpenApi"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: gecipeCoach,
        url: 'https://esports-english-app.gecipe.jp/coach/home',
    },
    {
        id: 3,
        name: 'Gecipe Admin App',
        description: 'I have designed and developed a full-stack web app for management users(coaches, students), lessons, classes, schedules, and payments.  I created the UI using NextJS, Typescript, MUI, TailwindCSS, and React Slick. I developed the API using NestJS, Typescript, PostgreSql, and ts-rest. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'MUI', "NestJS", "TypeScript", "PostgreSql", "AWS S3", "ts-rest"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: gecipeAdmin,
        url: 'https://gecipe-esports-english-admin.herokuapp.com/',
    },
    {
        id: 4,
        name: 'Game Introduction Website',
        description: "I have built a introduction website of games using in this company. HTML, CSS, Javascript and Django were used for this website. A one-minute e-sports learning site that delivers the latest technique videos and tactical articles daily to aspiring e-sports athletes.",
        tools: ['Django', 'HTML', 'CSS', 'Javascript', 'Jquery'],
        code: '',
        demo: '',
        image: gecipeGame,
        role: 'Full Stack Developer',
        url: 'https://gecipe.jp',
    },
    {
        id: 5,
        name: 'Car Sales Website',
        description: "My team and I have built the website for selling cars. We have used HTML, CSS, Javascript, PHP and Mysql. RZ Motors Kenya deal with all the major makers of Japanese vehicles such as Toyota, Honda, Nissan, Mitsubishi, Mazda, Subaru, Isuzu, Suzuki, and Daihatsu with a vast selection of models, as well as foreign cars made for Left Hand Drive market. ",
        tools: ['HTML', 'CSS', 'Javascript', 'PHP', 'Mysql'],
        code: '',
        demo: '',
        image: rz,
        role: 'Full Stack Developer',
        url: 'https://www.rzmotorskenya.com/'
    },
    {
        id: 6,
        name: 'Motivistjapan Website',
        description: "My team and I have built the website for carsMotivistjapan with Wordpress. In Motivist Japan aim is to assist foreign students to be successful in their studies in Japan. Most of their students learn the Japanese language to boost their careers. Whether they intend to go back to their home country or build their career in Japan, the skills and experience acquired in Japan proves to be priceless.",
        tools: ['Wordpress'],
        code: '',
        demo: '',
        image: motivist,
        role: 'Full Stack Developer',
        url: 'https://motivistjapan.com/',
    },
    {
        id: 7,
        name: 'Medii E-consult Web App',
        description: "My team and I have built the website of Medii. With the mission of “medical care that leaves no one behind,” Medii Inc. is developing a business to expand the knowledge of medical specialists online, especially in rare diseases and designated intractable diseases that present significant challenges.",
        tools: ['NextJS', 'MUI', 'Tailwind css', 'Redux', 'AWS'],
        code: '',
        demo: '',
        image: mediiEConsult,
        role: 'Front-end Developer',
        url: 'https://e-consult.medii.jp/chat?chat_room_id=661c1e4d-f1b5-441a-acd2-582d9eb66a1e',
    },
    {
        id: 8,
        name: 'Medii Website',
        description: 'My team and I have built the website of Medii. "E-Consult®” is a completely free online service that allows physicians to receive one-on-one consultations with specialists outside the hospital or in distant locations.',
        tools: ['NuxtJS', 'GrapghQl', 'S3 bucket', 'AWS', 'MUI', 'Google Login', 'Apple login'],
        code: '',
        demo: '',
        image: mediiHome,
        role: 'Front-end Developer',
        url: 'https://medii.jp/',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },