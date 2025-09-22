function StudentDetail(props) {
    return (<>
      <div className="col-sm-4 mb-3 mb-sm-0">

        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{props.name ?? "Not Provided"}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.title ?? "Not Provided"}</h6>
                <p className="card-text">
                    <b>Email:</b> {props.email ?? "Not Provided"} <br />
                    <b>Contact:</b> {props.contact ?? "Not Provided"}
                </p>

            </div>
        </div>

</div>

    </>);
}

export default StudentDetail;