function call_confirm(){

	if(confirm("정말로 탈퇴 처리 하시겠습니까?")){
        alert("탈퇴 되었습니다!");
        window.location.href= "../admin/admin.html";
	}else{
		
	}
}

function call_confirm2(){

	if(confirm("정말로 삭제 하시겠습니까?")){
        alert("삭제 되었습니다!");
        window.location.href= "../admin/admin.html";
	}else{
		
	}
}