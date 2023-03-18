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
      <Card className="focus:outline-none focus:ring focus:ring-green-500" isHoverable variant="bordered" css={{ mw: "3000px", borderRadius:"$sm" }}>
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
                  color: "#1fc76a",
                  fontWeight: "bold",
                  fontSize: "$md",
                }}
              >
                {time}&nbsp;&nbsp;
              </Text>

              <span className="pt-1">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
                className="w-5 h-5">
                <path
                  fill-rule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              </span>


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

        <Card.Footer css={{pt:"$3"}}>
          <Text
            css={{
              color: "#808080",
              fontWeight: "500",
              borderRadius: "20%",
              
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
