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

function mockCourtData(
  court_id,
  court_name,
  price_per_slot,
  court_center_id,
  court_center_name,
  address,
  openTime,
  closeTime,
  district,
  ward,
  province,
  description,
  lattitude,
  longtitude,
  isActive
) {
  return {
    court_id,
    court_name,
    price_per_slot,
    court_center_id,
    court_center_name,
    address,
    openTime,
    closeTime,
    district,
    ward,
    province,
    description,
    lattitude,
    longtitude,
    isActive,
  };
}

const rows = [
    mockCourtData(1, "Sân Ánh Dương", 150000, 101, "Trung Tâm Thể Thao Thành Phố", "123 Đường Lê Lợi", "06:00", "22:00", "Quận 1", "Phường Bến Nghé", "Hà Nội", "Sân ngoài trời có hệ thống chiếu sáng", 21.028511, 105.804817, true),
    mockCourtData(2, "Sân Bên Sông", 200000, 102, "Trung Tâm Green Valley", "456 Đường Bạch Đằng", "05:30", "21:30", "Quận 2", "Phường Thảo Điền", "TP. Hồ Chí Minh", "Sân bên sông, có khung cảnh đẹp", 10.802841, 106.722454, true),
    mockCourtData(3, "Sân Núi Sơn", 180000, 103, "Khu Thể Thao Bắc Sơn", "789 Đường Hoàng Diệu", "07:00", "20:00", "Quận Hải Châu", "Phường Hòa Thuận Tây", "Đà Nẵng", "Sân trên cao, view núi", 16.054407, 108.202167, true),
    mockCourtData(4, "Sân Trung Tâm", 250000, 104, "Trung Tâm Thể Dục Thành Phố", "101 Quảng Trường Trung Tâm", "06:00", "23:00", "Quận 1", "Phường Nguyễn Thái Bình", "TP. Hồ Chí Minh", "Sân chính tại trung tâm thành phố", 10.775659, 106.700424, true),
    mockCourtData(5, "Sân Ven Biển", 220000, 105, "Khu Thể Thao Biển", "202 Đường Trần Phú", "05:30", "21:00", "Quận Ngọc Hiệp", "Phường Vĩnh Nguyên", "Nha Trang", "Sân có view biển", 12.238791, 109.196749, true),
    mockCourtData(6, "Sân Hoàng Hôn", 170000, 106, "Trung Tâm Thể Thao Miền Tây", "303 Đường Cách Mạng Tháng 8", "06:00", "21:30", "Quận Ninh Kiều", "Phường An Cư", "Cần Thơ", "Sân ngoài trời, thích hợp ngắm hoàng hôn", 10.045162, 105.746857, false),
    mockCourtData(7, "Sân Bên Sông Hương", 190000, 107, "Trung Tâm Green Land", "404 Đường Hùng Vương", "06:30", "22:00", "Thành phố Huế", "Phường Phú Nhuận", "Huế", "Sân gần sông Hương, không gian yên tĩnh", 16.463713, 107.590866, true),
    mockCourtData(8, "Sân Công Viên", 160000, 108, "Trung Tâm Thể Thao Thủ Đô", "505 Đường Hoàng Hoa Thám", "07:00", "20:30", "Quận Ba Đình", "Phường Ngọc Hà", "Hà Nội", "Nằm trong công viên thành phố", 21.030723, 105.829942, false),
    mockCourtData(9, "Sân Quốc Gia", 300000, 109, "Sân Vận Động Quốc Gia", "606 Đường Lê Đức Thọ", "05:00", "22:00", "Quận Nam Từ Liêm", "Phường Mỹ Đình", "Hà Nội", "Sân nằm trong khu vực sân vận động quốc gia", 21.036236, 105.775760, true),
    mockCourtData(10, "Sân Hoa Phượng", 140000, 110, "Trung Tâm Thể Thao Hải Phòng", "707 Đường Lạch Tray", "06:00", "21:00", "Quận Ngô Quyền", "Phường Cầu Đất", "Hải Phòng", "Sân gần trung tâm thành phố, nhiều cây xanh", 20.844911, 106.688084, true),
    mockCourtData(11, "Sân Hòa Bình", 130000, 111, "Trung Tâm Thể Thao Hòa Bình", "808 Đường Quốc Lộ 6", "06:30", "20:30", "Thành phố Hòa Bình", "Phường Tân Thịnh", "Hòa Bình", "Sân gần khu dân cư yên bình", 20.840268, 105.337304, true),
    mockCourtData(12, "Sân Bạch Dương", 120000, 112, "Khu Thể Thao Bắc Trung Bộ", "909 Đường Lý Tự Trọng", "07:00", "19:30", "Thành phố Vinh", "Phường Hưng Dũng", "Nghệ An", "Sân trong khuôn viên xanh mát", 18.679585, 105.681335, true),
    mockCourtData(13, "Sân Đồi Thông", 160000, 113, "Trung Tâm Thể Thao Cao Nguyên", "101 Đường Phan Đình Phùng", "06:00", "20:00", "Thành phố Đà Lạt", "Phường 2", "Lâm Đồng", "Sân trên đồi thông, không khí mát mẻ", 11.940419, 108.458313, false),
    mockCourtData(14, "Sân Mặt Trời", 180000, 114, "Trung Tâm Thể Thao Mặt Trời", "202 Đường Ngô Gia Tự", "05:30", "22:00", "Quận Sơn Trà", "Phường An Hải Bắc", "Đà Nẵng", "Sân lớn, có hệ thống chiếu sáng mạnh", 16.06778, 108.223319, true),
    mockCourtData(15, "Sân Hoa Sen", 150000, 115, "Khu Thể Thao Đồng Bằng", "303 Đường Trần Phú", "06:00", "21:00", "Thành phố Phan Thiết", "Phường Bình Hưng", "Bình Thuận", "Sân gần biển, thoáng mát", 10.932155, 108.101009, true)
  ];
  

const CourtManagement = () => {
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
                <StyledTableCell align="right">Sân</StyledTableCell>
                <StyledTableCell align="right">Giá đặt lịch mỗi buổi</StyledTableCell>
                <StyledTableCell align="right">Giờ mở cửa</StyledTableCell>
                <StyledTableCell align="right">Giờ đóng cửa</StyledTableCell>
                <StyledTableCell align="right">Id trung tâm</StyledTableCell>
                <StyledTableCell align="right">Tên trung tâm</StyledTableCell>
                <StyledTableCell align="right">Địa chỉ</StyledTableCell>
                <StyledTableCell align="right">Phường</StyledTableCell>
                <StyledTableCell align="right">Quận</StyledTableCell>
                <StyledTableCell align="right">Tỉnh</StyledTableCell>
                <StyledTableCell align="right">Mô tả</StyledTableCell>
                <StyledTableCell align="right">Vĩ độ</StyledTableCell>
                <StyledTableCell align="right">Kinh độ</StyledTableCell>
                <StyledTableCell align="right">Trạng thái</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * perPage, page * perPage + perPage)
                .map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.court_id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.court_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.price_per_slot}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.openTime}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.closeTime}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.court_center_id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.court_center_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.address}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ward}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.district}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.province}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.lattitude}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.longtitude}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.isActive ? 'Còn hoạt động' : 'Ngưng hoạt động'}
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
export default CourtManagement;
