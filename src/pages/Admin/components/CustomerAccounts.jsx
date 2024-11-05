import {
    Card,
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.white,
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function mockCustomerData(id, username, customer_name, date_of_birth, gender, created_by, updated_by, created_at, updated_at) {
    return { id, username, customer_name, date_of_birth, gender, created_by, updated_by, created_at, updated_at };
}

const rows = [
    mockCustomerData(1, "minh", "Minh Anh", "1995-02-14", "Male", "admin", "admin", "2024-01-01", "2024-01-10"),
    mockCustomerData(2, "thu", "Thu Nguyen", "1988-08-20", "Female", "userA", "userB", "2024-01-15", "2024-01-25"),
    mockCustomerData(3, "bao", "Bao Tran", "1992-12-11", "Male", "admin", "userC", "2024-02-05", "2024-02-14"),
    mockCustomerData(4, "hanh", "Hanh Le", "1987-09-17", "Female", "userD", "admin", "2024-03-01", "2024-03-08"),
    mockCustomerData(5, "quoc", "Quoc Pham", "1994-05-30", "Male", "userE", "userF", "2024-03-15", "2024-03-22"),
    mockCustomerData(6, "hoa", "Hoa Nguyen", "1991-03-09", "Female", "admin", "userG", "2024-04-02", "2024-04-11"),
    mockCustomerData(7, "huy", "Huy Vo", "1986-10-12", "Male", "userH", "admin", "2024-05-05", "2024-05-12"),
    mockCustomerData(8, "phuong", "Phuong Tran", "1993-06-27", "Female", "userI", "userJ", "2024-06-10", "2024-06-20"),
    mockCustomerData(9, "duc", "Duc Nguyen", "1984-11-04", "Male", "admin", "userK", "2024-07-01", "2024-07-07"),
    mockCustomerData(10, "lan", "Lan Bui", "1990-01-23", "Female", "userL", "admin", "2024-08-15", "2024-08-23"),
    mockCustomerData(11, "tu", "Tu Mai", "1997-04-18", "Male", "admin", "userM", "2024-09-05", "2024-09-15"),
    mockCustomerData(12, "ngoc", "Ngoc Hoang", "1985-07-12", "Female", "userN", "userO", "2024-10-01", "2024-10-12"),
    mockCustomerData(13, "anh", "Anh Dang", "1996-02-28", "Male", "admin", "userP", "2024-10-20", "2024-10-30"),
    mockCustomerData(14, "khoa", "Khoa Le", "1983-05-20", "Male", "userQ", "admin", "2024-11-01", "2024-11-10"),
    mockCustomerData(15, "duong", "Duong Tran", "1991-09-05", "Female", "admin", "userR", "2024-12-01", "2024-12-05"),
    mockCustomerData(16, "chi", "Chi Pham", "1995-11-15", "Female", "userS", "admin", "2025-01-02", "2025-01-12"),
    mockCustomerData(17, "ha", "Ha Doan", "1993-10-08", "Male", "admin", "userT", "2025-02-01", "2025-02-11"),
    mockCustomerData(18, "kim", "Kim Phan", "1992-03-25", "Female", "userU", "admin", "2025-03-01", "2025-03-08"),
    mockCustomerData(19, "quy", "Quy Lam", "1988-12-02", "Male", "userV", "userW", "2025-03-15", "2025-03-25"),
    mockCustomerData(20, "van", "Van Nguyen", "1989-08-16", "Female", "admin", "userX", "2025-04-05", "2025-04-12"),
    mockCustomerData(21, "tuan", "Tuan Bui", "1984-07-14", "Male", "userY", "admin", "2025-05-01", "2025-05-10"),
    mockCustomerData(22, "my", "My Pham", "1997-01-29", "Female", "userZ", "admin", "2025-06-01", "2025-06-10"),
    mockCustomerData(23, "tien", "Tien Vo", "1990-02-21", "Male", "admin", "userA1", "2025-07-05", "2025-07-12"),
    mockCustomerData(24, "nhu", "Nhu Phan", "1985-11-30", "Female", "userB1", "admin", "2025-08-01", "2025-08-10"),
    mockCustomerData(25, "han", "Han Ngo", "1994-04-16", "Male", "admin", "userC1", "2025-09-01", "2025-09-07")
];

const CustomerAccounts = () => {
  const [page, setPage] = React.useState(0); 
  const [perPage, setPerPage] = React.useState(5); 

  function handleChangePage(event, newpage) { 
    setPage(newpage); 
  } 

  function handleChangeRowsPerPage(event) { 
    setPerPage(parseInt(event.target.value, 10)); 
    setPage(0); 
  } 
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 734, label: "Tài khoản hoạt động" },
                  {
                    id: 1,
                    value: 139,
                    label: "Tài khoản tạm ngưng hoạt động",
                  },
                  { id: 2, value: 42, label: "Tài khoản bị cấm" },
                ],
                innerRadius: 30,
                outerRadius: 80,
                paddingAngle: 0,
                cornerRadius: 5,
                startAngle: -45,
                endAngle: 225,
                cx: 70,
              },
            ]}
            height={200}
          />
        </Card>
        <Card>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 778, label: "Tài khoản khách hàng" },
                  {
                    id: 1,
                    value: 54,
                    label: "Tài khoản chủ sân",
                  },
                  { id: 2, value: 39, label: "Tài khoản nhân viên" },
                ],
                innerRadius: 30,
                outerRadius: 80,
                paddingAngle: 0,
                cornerRadius: 5,
                startAngle: -45,
                endAngle: 225,
                cx: 100,
              },
            ]}
            height={200}
          />
        </Card>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Tên đăng nhập</StyledTableCell>
                <StyledTableCell align="right">Họ và tên</StyledTableCell>
                <StyledTableCell align="right">Năm sinh</StyledTableCell>
                <StyledTableCell align="right">Giới tính</StyledTableCell>
                <StyledTableCell align="right">Người tạo</StyledTableCell>
                <StyledTableCell align="right">Người cập nhật</StyledTableCell>
                <StyledTableCell align="right">Ngày tạo</StyledTableCell>
                <StyledTableCell align="right">Ngày cập nhật</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * perPage, page * perPage + perPage).map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.username}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.customer_name}</StyledTableCell>
                  <StyledTableCell align="right">{row.date_of_birth}</StyledTableCell>
                  <StyledTableCell align="right">{row.gender}</StyledTableCell>
                  <StyledTableCell align="right">{row.created_by}</StyledTableCell>
                  <StyledTableCell align="right">{row.updated_by}</StyledTableCell>
                  <StyledTableCell align="right">{row.created_at}</StyledTableCell>
                  <StyledTableCell align="right">{row.updated_at}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]} 
          component="div"
          count={rows.length} 
          rowsPerPage={perPage} 
          page={page} 
          onPageChange={handleChangePage} 
          onRowsPerPageChange={handleChangeRowsPerPage} 
        /> 
      </div>
    </div>
  );
};
export default CustomerAccounts;
