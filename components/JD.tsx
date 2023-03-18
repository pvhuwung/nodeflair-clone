import { Button, Card, Grid, Text } from "@nextui-org/react";

interface JcardProps {
  Icon: string;
  Company: string;
  specialization: string;
  role: string;
  time: string;
  place: string;
  salary: string;
  skills: string[];
}

const JD: React.FC<JcardProps> = ({
  Icon,
  Company,
  specialization,
  role,
  time,
  place,
  salary,
  skills,
}) => {
  return (


    <Grid.Container gap={2}>
      <Card variant="bordered" css={{ mw: "2000px", height: "2000px", borderRadius: "$sm" }}>
        <Card.Header>
          <img
            src={Icon}
            width="46px"
            height="46px"
            className="relative left-0 -top-4"
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text css={{ color: "#gray" }}>{Company} </Text>
              <Card isHoverable
                css={{
                  textAlign: "center",
                  mw: "70px",
                  height: "30px",
                  color: "#FFFFFF",
                  position: "absolute",
                  top: "$10",
                  right: "$10",
                  border: "1px",
                  backgroundColor: "#1fc76a",
                  fontWeight: "800",
                  borderRadius: "5px",
                  fontSize: "$md"
                }}
              >
                &nbsp; Apply &nbsp;
              </Card>
              <Card isHoverable
                css={{
                  textAlign: "center",
                  mw: "70px",
                  height: "30px",
                  color: "#1fc76a",
                  position: "absolute",
                  top: "$18",
                  right: "$10",
                  backgroundColor: "#FFFFFF",
                  fontWeight: "800",
                  borderRadius: "5px",
                  fontSize: "$md",
                  border: "1px solid #1fc76a",
                  borderColor: "#1fc76a"
                }}
              >
                &nbsp; Share &nbsp;
              </Card>

            </Grid>

            <Grid xs={12}>
              <Text
                css={{
                  fontWeight: "bold",
                  fontSize: "$xl",
                  lineHeight: "$xs",
                  mb: "$1",
                }}
              >
                {role}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                css={{
                  color: "gray",
                  fontSize: "$md",
                  paddingTop:"$5",
                  fontWeight:"normal"
                }}
              >
                {time}&nbsp;&nbsp;
              </Text>
              <span className="pt-3">
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 bot-1 "
              >
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              </span>

              <span className="text-gray-500 font-normal text-md pt-2 ">
                {" "}
                {place}
              </span>

            </Grid>
                
            <Grid xs={12}>
              <Text css={{ color: "#000000", lineHeight: "$xs", mb: "$1" }}>
                {salary}
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>


        <Card.Footer>

          <Text
            css={{
              color: "#808080",
              fontWeight: "500",
              borderRadius: "10%",
            }}
          >
            {skills.map((skill) => (
              <span className="skill-span " key={skill}>
                &nbsp;&nbsp; {skill} &nbsp;&nbsp;
              </span>
            ))}
          </Text>
        </Card.Footer>
        <Card.Divider />

        <Grid.Container>
        <Card.Header>

          <Text
            css={{
              fontWeight: "semibold",
              fontSize: "$xl",
              lineHeight: "$xs",
              mb: "$1",
            }}
          >
            Job Description
          </Text>
        </Card.Header>


        </Grid.Container>

      </Card>

    </Grid.Container>
  );
};
export default JD;
