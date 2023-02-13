import cross from '../../img/icons/cross.svg'


export const ButtonDelete = ({ deleteProduct, id }) => {
  return (
    <button onClick={() => deleteProduct(id)} type="button">
      <img src={cross} alt="Delete" />
    </button>
  )
}
