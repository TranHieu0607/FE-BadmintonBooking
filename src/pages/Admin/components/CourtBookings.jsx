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
  TableRow,
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

function mockCourtBookingData(
  booking_id,
  booking_start_date,
  booking_end_date,
  booking_type,
  customer_name,
  booking_status,
  court_name,
  created_by,
  updated_by,
  created_at,
  updated_at
) {
  return {
    booking_id,
    booking_start_date,
    booking_end_date,
    booking_type,
    customer_name,
    booking_status,
    court_name,
    created_by,
    updated_by,
    created_at,
    updated_at,
  };
}

const rows = [
    mockCourtBookingData(1, "2024-11-01 08:00", "2024-11-01 10:00", "Nhóm 1 người", "Nguyễn Văn A", "Đã xác nhận", "Sân Ánh Dương", "admin", "admin", "2024-10-25", "2024-10-26"),
    mockCourtBookingData(2, "2024-11-02 14:00", "2024-11-02 16:00", "Nhóm 2 người", "Lê Thị B", "Đang chờ", "Sân Bên Sông", "người dùng A", "người dùng B", "2024-10-26", "2024-10-27"),
    mockCourtBookingData(3, "2024-11-03 09:00", "2024-11-03 11:00", "Nhóm 1 người", "Trần Văn C", "Đã hủy", "Sân Núi Sơn", "admin", "người dùng C", "2024-10-28", "2024-10-29"),
    mockCourtBookingData(4, "2024-11-04 17:00", "2024-11-04 19:00", "Nhóm 3 người", "Phạm Thị D", "Đã xác nhận", "Sân Trung Tâm", "người dùng D", "admin", "2024-10-29", "2024-10-30"),
    mockCourtBookingData(5, "2024-11-05 07:00", "2024-11-05 09:00", "Nhóm 2 người", "Hoàng Văn E", "Đang chờ", "Sân Ven Biển", "người dùng E", "người dùng F", "2024-10-30", "2024-10-31"),
    mockCourtBookingData(6, "2024-11-06 15:00", "2024-11-06 17:00", "Nhóm 1 người", "Nguyễn Thị F", "Đã xác nhận", "Sân Hoàng Hôn", "admin", "người dùng G", "2024-11-01", "2024-11-02"),
    mockCourtBookingData(7, "2024-11-07 10:00", "2024-11-07 12:00", "Nhóm 2 người", "Lê Văn G", "Đang chờ", "Sân Bên Sông Hương", "người dùng H", "admin", "2024-11-02", "2024-11-03"),
    mockCourtBookingData(8, "2024-11-08 08:30", "2024-11-08 10:30", "Nhóm 1 người", "Trần Thị H", "Đã xác nhận", "Sân Công Viên", "người dùng I", "người dùng J", "2024-11-03", "2024-11-04"),
    mockCourtBookingData(9, "2024-11-09 16:00", "2024-11-09 18:00", "Nhóm 2 người", "Phạm Văn K", "Đang chờ", "Sân Quốc Gia", "người dùng K", "người dùng L", "2024-11-04", "2024-11-05"),
    mockCourtBookingData(10, "2024-11-10 07:00", "2024-11-10 09:00", "Nhóm 1 người", "Nguyễn Thị L", "Đã xác nhận", "Sân Hoa Phượng", "admin", "người dùng M", "2024-11-05", "2024-11-06"),
    mockCourtBookingData(11, "2024-11-11 11:00", "2024-11-11 13:00", "Nhóm 2 người", "Vũ Văn M", "Đang chờ", "Sân Hòa Bình", "người dùng N", "admin", "2024-11-06", "2024-11-07"),
    mockCourtBookingData(12, "2024-11-12 09:30", "2024-11-12 11:30", "Nhóm 1 người", "Đỗ Thị O", "Đã xác nhận", "Sân Bạch Dương", "người dùng O", "người dùng P", "2024-11-07", "2024-11-08"),
    mockCourtBookingData(13, "2024-11-13 14:00", "2024-11-13 16:00", "Nhóm 3 người", "Nguyễn Văn P", "Đang chờ", "Sân Đồi Thông", "admin", "người dùng Q", "2024-11-08", "2024-11-09"),
    mockCourtBookingData(14, "2024-11-14 18:00", "2024-11-14 20:00", "Nhóm 2 người", "Lê Thị Q", "Đã xác nhận", "Sân Mặt Trời", "người dùng R", "admin", "2024-11-09", "2024-11-10"),
    mockCourtBookingData(15, "2024-11-15 10:00", "2024-11-15 12:00", "Nhóm 1 người", "Trần Văn R", "Đã xác nhận", "Sân Hoa Sen", "người dùng S", "người dùng T", "2024-11-10", "2024-11-11")
];
  

const CourtBookings = () => {
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
                <StyledTableCell align="right">Đặt lúc(bắt đầu)</StyledTableCell>
                <StyledTableCell align="right">Đặt lúc(kết thúc)</StyledTableCell>
                <StyledTableCell align="right">
                  Loại
                </StyledTableCell>
                <StyledTableCell align="right">Tên khách hàng</StyledTableCell>
                <StyledTableCell align="right">Trạng thái</StyledTableCell>
                <StyledTableCell align="right">Người tạo</StyledTableCell>
                <StyledTableCell align="right">Người cập nhật</StyledTableCell>
                <StyledTableCell align="right">Ngày tạo</StyledTableCell>
                <StyledTableCell align="right">Ngày cập nhật</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * perPage, page * perPage + perPage)
                .map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.booking_id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.booking_start_date}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.booking_end_date}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.booking_type}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.customer_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.booking_status}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.court_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.created_by}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.updated_by}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.created_at}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.updated_at}
                    </StyledTableCell>
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
export default CourtBookings;
