import { Grid, Typography } from "@mui/material"
import Cards from "./cards"
import Container from "./Container"
import { useMediaQuery } from "@mui/material"

export default function Portfolio() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTabletScreen = useMediaQuery("(max-width:899px)");

  const portfolioData = [
    {
      "title": "MEFIC Saudi Riyal Murabaha Fund for the period ending on 2023-12-31",
      "paragraph": "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.",
      "image": "assets/Rectangle 15.svg",
      "linkHref": "#"
    },
    {
      "title": "MEFIC signs a MOU for 300 rooms with Boudl Hotels and Resorts Group",
      "paragraph": "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth..",
      "image": "assets/hotel.svg",
      "linkHref": "#"
    },
    {
      "title": "partnership to establish the first Saudi investment fund to finance film",
      "paragraph": "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.",
      "image": "assets/partnership.svg",
      "linkHref": "#"
    }
  ]

  return (
    <>
      <Container>
        <div style={{ backgroundColor: "#fff", minWidth: "125%" }}>
        <Grid sx={{paddingLeft: { xs: "7vw", md: "8vw" },
}}>
   
     
    <Typography sx={{fontSize:{ xs: "6vw", md: "3vw" },paddingTop:"10vh" }}>
    The <span style={{color:"black",fontWeight:"bold"}}>latest </span> news and our <br/> <span style={{color:"#E95A0C",fontWeight:"bold"}}>portfolio companies</span> 
    </Typography>
    <Typography sx={{borderBottom:"0.5vh solid #2D3C65",maxWidth:{ xs: "25vw", md: "12vw" },color:"", paddingBottom:"2vh",}}> </Typography>
    <Typography sx={{maxWidth:"70%",paddingTop:"5vh"}}>Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise. </Typography>
    </Grid>

          <Grid container sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : isTabletScreen ? "row" : "row",
            justifyContent: "space-between",
            paddingTop: { xs: "5vw", md: "10vw" },
            paddingLeft: { xs: "4vw", md: "5vw" },
            paddingBottom: "10vh"
          }}>

            {/* card 1  */}
            {portfolioData.map((item, index) => (
              <Grid item xs={12} md={4} key={index} paddingLeft="6vh">
                <Cards
                  H1={item.title}
                  para={item.paragraph}
                  image={item.image}
                  link_href={item.linkHref}
                />
              </Grid>
            ))}

          </Grid>
        </div>

      </Container>
    </>
  )
}
