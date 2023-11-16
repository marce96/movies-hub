import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const fixDecimal = (num: number) => {
    if (num.toString().split(".")[1]?.length > 1)
      return parseFloat(num.toFixed(1));
    else return num;
  };
  let color = score > 7.5 ? "green" : "yellow";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {fixDecimal(score)}
    </Badge>
  );
};

export default CriticScore;
