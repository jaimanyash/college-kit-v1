import React from "react";
import Header from "../../common/Header/Header";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import "./AboutCollege.css";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export const AboutCollege = () => {
  return (
    <div className="home">
      <Header />
      <div className="container" id="aboutContainer">
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <Card variant="outlined">
              <Grid
                container
                justifyContent="center"
                alignItems="flex-start"
                className="p-3 "
              >
                <Grid item xs={8} md={4}>
                  <Grid container justifyContent="center" alignContent="center">
                    <CardMedia
                      component="img"
                      style={{ maxWidth: "150px" }}
                      image="logo.png"
                      label={"Logo"}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Grid container justifyContent="center">
                    <CardContent className="text-center">
                      <Typography gutterBottom variant="h3" component="h2">
                        {"MGM's College of Engineering and Technology"}
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        <a
                          href="http://www.mgmnoida.org/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {"Official College Website"}
                          <OpenInNewIcon fontSize="small" />
                        </a>
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" className="my-3">
          <Grid item xs={10}>
            <Card variant="outlined">
              <Container className="px-5 py-4">
                <Typography variant="h4" className="text-center pb-3">
                  About College
                </Typography>
                <Typography variant="body2">
                  {
                    "Mahatma Gandhi Mission is a charitable trust, registered under the society's Registration Act.(1960) on 20th Dec. 1982, with its prime objective of Social welfare, Human Resource Development, Medical Care, Education, Forestry and Environment, Mass Communication, Sports & Fine Art. The founders are a group of Engineers, Doctors, and Scientists having a high career profile, commitment to social interest and dedication to work."
                  }
                </Typography>
                <br />
                <Typography variant="body2">
                  {
                    "The four years dedicated to engineering lays the foundation to being a committed engineer. MGMCoET, philosophizes in excellence, known for its total commitment to superiority in technical education and research with education and holistic concern for life's quality environment, society and ethics, keen perception towards future and knowledge of Contemporary Technologies and concepts."
                  }
                </Typography>
                <br />
                <Typography variant="body2">
                  {
                    "MGM trust has on its accord more then 38 institutions all over the country setting the norms of quality and running these institutions successfully. We can comfortably boast of excellent academic records leading us towards excellence along with blend of sports, cultural and many multifarious activities leading us to the horizons where total personality development of the students becomes our main aim, providing us with a winning edge above others. Guest Lectures, Industry Visits, Summer Trainings, Pre Placement Task, etc harness skills."
                  }
                </Typography>
                <br />
                <Typography variant="body2">
                  {
                    "Recognition and Inclusion by the College Grants Commission of India (UGC) under section 12 B of the College Grants Commission, UGC ACT 1956. Recognised under UGC Section 12B and NAAC accredited with B+ Grade."
                  }
                </Typography>
                <br />
                <Typography variant="body2">
                  {
                    "To create congenial & conducive environment for faculty and students to learn through a world class well designed comprehensive technical education with active Industry-Academia Interaction which nurtures excellence on sustainable basis."
                  }
                </Typography>
                <br />
                <Typography variant="body2">
                  {
                    "To provide World Class Technical Education that empowers students with sound knowledge, focused abilities, right attitudes and better values leading to their holistic personality development to meet the future proliferation of technology integration in the dynamic global scenario."
                  }
                </Typography>
                <br />
                <Typography variant="body2">
                  {
                    "Approved by AICTE, Ministry of HRD & Govt. of India and Affiliated to Dr A.P.J Abdul Kalam Technical College, Lucknow, U.P"
                  }
                </Typography>
                <br />
              </Container>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
