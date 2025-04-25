const TripleGrid = ({
  firstColumn,
  secondColumn,
  thirdColumn,
}: {
  firstColumn: React.ReactNode;
  secondColumn: React.ReactNode;
  thirdColumn: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-8 py-8">
      <div className="col-span-1">{firstColumn}</div>
      <div className="col-span-2">{secondColumn}</div>
      <div className="col-span-1">{thirdColumn}</div>
    </div>
  );
};

export default TripleGrid;
