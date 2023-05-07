import prisma from "@/lib/prisma";

const getData = async () => {
  const res = await prisma.dataResponden.findMany({
    select: {
      id: true,
      name: true,
      universitas: true,
      prodi: true,
      negara: true,
      status: true,
      hitung1: true,
      hitung2: true,
      hitung3: true,
    },
  });
  return res;
};

const Admin = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="absolute overflow-x-auto inset-x-0 left-0 mx-5">
      <table className="table table-auto w-full">
        {/* head */}
        <thead>
          <tr>
            <th className="w-2">#</th>
            <th>Name</th>
            <th>University</th>
            <th>Major</th>
            <th>Country</th>
            <th>Answer 1</th>
            <th>Answer 2</th>
            <th>Answer 3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={data.id}>
              <th>{index + 1}</th>
              <td>{data.name}</td>
              <td>{data.universitas}</td>
              <td>{data.prodi}</td>
              <td>{data.negara}</td>
              <td>{data.hitung1}</td>
              <td>{data.hitung2}</td>
              <td>{data.hitung3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Admin;
