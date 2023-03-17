import { Card, Grid, Text } from "@nextui-org/react";

interface JcardProps {
  Icon: string;
  Company: string;
  specialization: string;
  role: string;
  time: string; 
  place: string;
  salary: string;
  skills: string[];
  onSelect: () => void;
}

const Jcard: React.FC<JcardProps> = ({
  Icon,
  Company,
  specialization,
  role,
  time,
  place,
  salary,
  skills,
  onSelect,
}) => {
  return (
    <Grid.Container gap={2} onClick={onSelect} className="cursor-pointer">
      <Card isHoverable variant="bordered" css={{ mw: "3000px" }}>
        <Card.Header>
          <img
            src={Icon}
            width="46px"
            height="46px"
            className="relative left-0 -top-4"
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>{Company} </Text>
              <Text
                css={{
                  color: "#1fc76a",
                  position: "absolute",
                  top: "$8",
                  right: "$10",
                  border: "1px",
                  backgroundColor: "#DCFAE4",
                  fontWeight: "500",
                  borderRadius: "10%",
                }}
              >
                &nbsp;&nbsp; {specialization} &nbsp;&nbsp;{" "}
              </Text>
            </Grid>

            <Grid xs={12}>
              <Text
                css={{
                  fontWeight: "bold",
                  fontSize: "$l",
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
                  color: "#1fc76a",
                  fontWeight: "bold",
                  fontSize: "$md",
                }}
              >
                {time}&nbsp;&nbsp;
              </Text>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
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

              <span className="text-gray-500 font-normal text-lg ">
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

        <Card.Divider />

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
      </Card>
    </Grid.Container>
  );
};
export default Jcard;
