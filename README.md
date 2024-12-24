## Mini project: Quản lý bài viết
#### Đăng nhập / đăng ký.
- Bước 1: Khi bấm vào đăng ký thì sẽ show ra modal
- Bước 2: Khi người dùng bấm đăng ký => validate dữ liệu đầu vào
- Bước 3: Nếu validate dữ liệu thành công => thì sẽ gửi dữ liệu lên api, nếu thất bại thì yêu cầu người dùng nhập lại

- Quản lý bài viết.
	+ Thêm bài viết
	+ Danh sách bài viết
	+ Sửa bài viết
	+ Xóa bài viết
	+ Bình luận bài viết
	+ Phân loại bài viết
	+ Xử lý phân trang

#### Giao diện:
- Sử dụng thư viện UI
- Dữ liệu: sử dụng json-server
- Sử dụng axios: để thao tác với api
- Sử dụng react-query: để quản lý cache dữ liệu
- Sử dụng context, react-router-dom

#### Dữ liệu người dùng:
- Khi đăng ký:
	*Email
	*Tên người dùng
	*Mật khẩu

- Khi đăng nhập:
	*Email
	*Mật khẩu

- Dữ liệu bài viết:
	```
    {
		id: mã của bài viết
		title: tiêu đề bài viết
		image: ảnh của bài viết (nếu có)
		category: danh mục chứa bài viết // HTML, CSS, JAVSCRIPT, NODEJS, REACTJS
		content: nội dung của bài viết
		createdAt: ngày tạo bài viết
	}
    ```
