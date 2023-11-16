import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card height="100%">
      <Skeleton height="245px">
        <CardBody>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default MovieCardSkeleton;
