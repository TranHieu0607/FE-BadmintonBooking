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

function mockOwnerData(id, username, owner_name, date_of_birth, gender, created_by, updated_by, created_at, updated_at) {
  return { id, username, owner_name, date_of_birth, gender, created_by, updated_by, created_at, updated_at };
}
  
const rows = [
  mockOwnerData(1, "tran", "Tran Van A", "1990-01-15", "Male", "admin", "admin", "2024-01-01", "2024-01-15"),
  mockOwnerData(2, "nguyen", "Nguyen Thi B", "1985-05-10", "Female", "user123", "user123", "2024-01-05", "2024-01-20"),
  mockOwnerData(3, "le", "Le Van C", "1992-08-22", "Male", "admin", "user456", "2024-02-10", "2024-02-15"),
  mockOwnerData(4, "pham", "Pham Thi D", "1988-11-30", "Female", "admin", "admin", "2024-03-01", "2024-03-05"),
  mockOwnerData(5, "vu", "Vu Van E", "1995-06-12", "Male", "user789", "user789", "2024-03-15", "2024-03-25"),
  mockOwnerData(6, "do", "Do Thi F", "1993-09-18", "Female", "admin", "user123", "2024-04-10", "2024-04-20"),
  mockOwnerData(7, "ngo", "Ngo Van G", "1987-03-25", "Male", "user456", "admin", "2024-05-05", "2024-05-15"),
  mockOwnerData(8, "truong", "Truong Thi H", "1991-10-30", "Female", "user789", "user456", "2024-06-01", "2024-06-10"),
  mockOwnerData(9, "hoang", "Hoang Van I", "1994-12-12", "Male", "admin", "user123", "2024-07-10", "2024-07-20"),
  mockOwnerData(10, "ngoc", "Ngoc Thi J", "1986-04-18", "Female", "admin", "user789", "2024-08-01", "2024-08-05"),
  mockOwnerData(11, "dinh", "Dinh Van K", "1989-07-24", "Male", "user456", "admin", "2024-08-10", "2024-08-15"),
  mockOwnerData(12, "luu", "Luu Thi L", "1997-01-05", "Female", "user123", "user456", "2024-09-01", "2024-09-05"),
  mockOwnerData(13, "bui", "Bui Van M", "1983-02-28", "Male", "admin", "user789", "2024-09-10", "2024-09-20"),
  mockOwnerData(14, "phung", "Phung Thi N", "1990-05-20", "Female", "admin", "admin", "2024-10-01", "2024-10-10"),
  mockOwnerData(15, "ha", "Ha Van O", "1996-08-08", "Male", "user123", "admin", "2024-10-15", "2024-10-25"),
  mockOwnerData(16, "cao", "Cao Thi P", "1991-03-16", "Female", "user456", "user789", "2024-11-01", "2024-11-10"),
  mockOwnerData(17, "quach", "Quach Van Q", "1982-11-05", "Male", "admin", "user123", "2024-11-15", "2024-11-20"),
  mockOwnerData(18, "ly", "Ly Thi R", "1993-06-30", "Female", "admin", "admin", "2024-12-01", "2024-12-05"),
  mockOwnerData(19, "nghiem", "Nghiem Van S", "1990-01-21", "Male", "user456", "user789", "2024-12-10", "2024-12-15"),
  mockOwnerData(20, "vuong", "Vuong Thi T", "1985-10-02", "Female", "user123", "admin", "2025-01-01", "2025-01-10"),
  mockOwnerData(21, "khong", "Khong Van U", "1989-09-15", "Male", "admin", "user456", "2025-01-15", "2025-01-20"),
  mockOwnerData(22, "mac", "Mac Thi V", "1994-03-22", "Female", "admin", "admin", "2025-02-01", "2025-02-05"),
  mockOwnerData(23, "hong", "Hong Van W", "1987-12-18", "Male", "user789", "user123", "2025-02-10", "2025-02-15"),
  mockOwnerData(24, "pham", "Pham Thi X", "1996-07-25", "Female", "admin", "user456", "2025-03-01", "2025-03-05"),
  mockOwnerData(25, "nghiem", "Nghiem Van Y", "1982-05-30", "Male", "user123", "admin", "2025-03-10", "2025-03-20")
];

const OwnerAccountManagement = () => {
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
                  { id: 0, value: 234, label: "Tài khoản hoạt động" },
                  {
                    id: 1,
                    value: 79,
                    label: "Tài khoản tạm ngưng hoạt động",
                  },
                  { id: 2, value: 21, label: "Tài khoản bị cấm" },
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
                  <StyledTableCell align="right">{row.owner_name}</StyledTableCell>
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
export default OwnerAccountManagement;
