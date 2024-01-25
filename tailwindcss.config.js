tailwind.config = {
  content: ["./css/font.css/index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm:'2rem',
      },
    },
    extend: {
      fontFamily:{
        inter: ['inter'],
        rubik: ['rubik'],
        opensens: ['opensens'],
      },
      screens: {
        'xs':'450px',
        // => @media (min-width: 450px) { ... }
      },
      colors: {
        firstColor: '#C9F31D',
        bgColor: '#131313',
        textColor: '#DDD',
        secondColor:'#CECECE'
      }
    }
  }
}