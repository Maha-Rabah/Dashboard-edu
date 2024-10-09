import Table from '../../../components/Table/Table'
import sampleBlog from '../../../assets/sampleBlog.png'
import './dashboardBlog.css'

const DashboardBlog = () => {

  const BlogColumns = [
    "","No.", "Name","Date", "Writer", "Country", "Actions"
  ]


const BlogData = [
  {img:sampleBlog, No:'1', Name:'How to be succesful', Date:"24/Oct/2024", Writer:"Ehab Al-Serawan", Country:"Syria"},
  {img:sampleBlog, No:'1', Name:'How to be succesful', Date:"24/Oct/2024", Writer:"Ehab Al-Serawan", Country:"Syria"},
  {img:sampleBlog, No:'1', Name:'How to be succesful', Date:"24/Oct/2024", Writer:"Ehab Al-Serawan", Country:"Syria"},
  {img:sampleBlog, No:'1', Name:'How to be succesful', Date:"24/Oct/2024", Writer:"Ehab Al-Serawan", Country:"Syria"},
  {img:sampleBlog, No:'1', Name:'How to be succesful', Date:"24/Oct/2024", Writer:"Ehab Al-Serawan", Country:"Syria"},

]
  return (
    <>
    <div className="dashboard-container">
      <div className="blog-container">
        <Table title="Blog" btn="Add Blog" columns={BlogColumns} data={BlogData} />
      </div>
    </div>
</>
  )
}

export default DashboardBlog