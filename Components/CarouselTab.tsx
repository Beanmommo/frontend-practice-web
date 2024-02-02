import CSS from 'csstype'

const carouseltab: CSS.Properties = {
  display: 'grid',
  justifyContent: 'center'
}

const h3styles: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '24px',
  lineHeight: '31.25px',
  fontWeight: '700',
  paddingBottom: '2rem'
}

const h1styles: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '72px',
  lineHeight: '86px',
  fontWeight:'700',
  paddingBottom: '3rem'
}

const h5styles: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '22px',
  lineHeight: '32px',
  wordWrap: 'normal',
  width: '736px',
  textAlign: 'center'
}

export const CarouselTab = () => {
  return (

    <div style={carouseltab}>
        <h3 style={h3styles}>Startup 3</h3>
        <h1 style={h1styles}>Forget About Code</h1>
        <h5 style={h5styles}>
            Startup Framework gives you complete freedom over your creative process - you dont have to think about any technical aspects. There are no limits and absolutely no coding
        </h5>
    </div>
    
  )
}
export default CarouselTab;

