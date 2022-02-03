import './Sticker.css';

function getAppSymbol(app) {
  if (app === 'main') {
    return '\u25CF';
  }

  if (app === 'addit') {
    return '\u25CB';
  }

  return '';
}

function getRangeString(min, max) {
  if (min && max) {
    return `${min}-${max}`
  }

  return '';
}

function Sticker(props) {
  let data = props.data;

  return (
    <>
      <table className="sticker">
        <tbody>
          <tr className="row-1">
            <td className="col-1 bg-c" rowSpan="8"></td>
            <td className="col-2" rowSpan="8">
              <span className="sticker__address">
                Россия, 308009, г. Белгород,<br/>
                ул. Волчанская, 159<br/>
                Тел.: +7 (4722) 21-32-85<br/>
                Факс.: +7 (4722) 27-03-15<br/>
                info@skif-m.net www.skif-m.net
              </span>
            </td>
            <td className="col-3" rowSpan="8"></td>
            <td className="col-4" rowSpan="8">
              <span 
                className="sticker__title-side"
              >
                <span
                  style={{
                    fontSize: data.validInsert.length > 19 ? '8px' : '9px'
                  }}
                >
                  {data.validInsert}
                </span>
                <br></br>
                <span>
                  {data.grade}
                </span>
              </span>
            </td>
            <td className="col-5" rowSpan="8"></td>
            <td className="col-6"></td>
            <td className="col-7" colSpan="5">
              <span className="sticker__title-front">
                {data.validInsert} {data.grade}
              </span>
            </td>
            <td className="col-12">
              <span className="sticker__quantity">
                {data.quantity} шт.
              </span>
            </td>
            <td className="col-13">
              <span className="sticker__year">
                {data.year}
              </span>
            </td>
            <td className="col-14 bg-c" rowSpan="8"></td>
          </tr>

          <tr className="row-2">
            <td className="col-6"></td>
            <td className="col-7 sticker__app--p">
              <span className="sticker__app">
                {getAppSymbol(data.dataSpeed?.app_P)}
              </span>
            </td>
            <td className="col-8 sticker__app--m">
              <span className="sticker__app">
                {getAppSymbol(data.dataSpeed?.app_M)}
              </span>
            </td>
            <td className="col-9 sticker__app--k">
              <span className="sticker__app">
                {getAppSymbol(data.dataSpeed?.app_K)}
              </span>
            </td>
            <td className="col-10 sticker__app--n">
              <span className="sticker__app">
                {getAppSymbol(data.dataSpeed?.app_N)}
              </span>
            </td>
            <td className="col-11 sticker__app--s">
              <span className="sticker__app">
                {getAppSymbol(data.dataSpeed?.app_S)}
              </span>
            </td>
            <td className="col-12 sticker__app--h">
              <span className="sticker__app">
                {getAppSymbol(data.dataSpeed?.app_H)}
              </span>
            </td>
            <td className="col-13">
              <span className="sticker__app">
                {getAppSymbol(data.dataSpeed?.app_O)}
              </span>
            </td>
          </tr>

          <tr className="row-3">
            <td className="col-6">
              <span className="sticker__iso-title">ISO</span>
            </td>
            <td className="col-7">
              <span className="sticker__iso-value">
                {data.dataSpeed?.ISO_P}
              </span>
            </td>
            <td className="col-8">
              <span className="sticker__iso-value">
                {data.dataSpeed?.ISO_M}
              </span>
            </td>
            <td className="col-9">
              <span className="sticker__iso-value">
                {data.dataSpeed?.ISO_K}
              </span>
            </td>
            <td className="col-10">
              <span className="sticker__iso-value">
                {data.dataSpeed?.ISO_N}
              </span>
            </td>
            <td className="col-11">
              <span className="sticker__iso-value">
                {data.dataSpeed?.ISO_S}
              </span>
            </td>
            <td className="col-12">
              <span className="sticker__iso-value">
                {data.dataSpeed?.ISO_H}
              </span>
            </td>
            <td className="col-13">
              <span className="sticker__iso-value">
                {data.dataSpeed?.ISO_O}
              </span>
            </td>
          </tr>

          <tr className="row-4">
            <td className="col-6">
              <span className="sticker__speed-title">V<sub>c</sub></span>
              <span className="sticker__speed-dim">м/мин</span>
            </td>
            <td className="col-7">
              <span className="sticker__speed-value">
                {getRangeString(data.dataSpeed?.Vc_min_P, data.dataSpeed?.Vc_max_P)}
              </span>
            </td>
            <td className="col-8">
              <span className="sticker__speed-value">
                {getRangeString(data.dataSpeed?.Vc_min_M, data.dataSpeed?.Vc_max_M)}
              </span>
            </td>
            <td className="col-9">
              <span className="sticker__speed-value">
                {getRangeString(data.dataSpeed?.Vc_min_K, data.dataSpeed?.Vc_max_K)}
              </span>
            </td>
            <td className="col-10">
              <span className="sticker__speed-value">
                {getRangeString(data.dataSpeed?.Vc_min_N, data.dataSpeed?.Vc_max_N)}
              </span>
            </td>
            <td className="col-11">
              <span className="sticker__speed-value">
                {getRangeString(data.dataSpeed?.Vc_min_S, data.dataSpeed?.Vc_max_S)}
              </span>
            </td>
            <td className="col-12">
              <span className="sticker__speed-value">
                {getRangeString(data.dataSpeed?.Vc_min_H, data.dataSpeed?.Vc_max_H)}
              </span>
            </td>
            <td className="col-13">
              <span className="sticker__speed-value">
                {getRangeString(data.dataSpeed?.Vc_min_O, data.dataSpeed?.Vc_max_O)}
              </span>
            </td>
          </tr>

          <tr className="row-5">
            <td className="col-6">
              <span className="sticker__feed-title">f<sub>z</sub></span>
              <span className="sticker__feed-dim">мм/зуб</span>
            </td>
            <td className="col-7">
              <span className="sticker__feed-value">
                {getRangeString(data.dataFeed?.fz_min_P, data.dataFeed?.fz_max_P)}
              </span>
            </td>
            <td className="col-8">
              <span className="sticker__feed-value">
                {getRangeString(data.dataFeed?.fz_min_M, data.dataFeed?.fz_max_M)}
              </span>
            </td>
            <td className="col-9">
              <span className="sticker__feed-value">
                {getRangeString(data.dataFeed?.fz_min_K,data.dataFeed?.fz_max_K)}
              </span>
            </td>
            <td className="col-10">
              <span className="sticker__feed-value">
                {getRangeString(data.dataFeed?.fz_min_N,data.dataFeed?.fz_max_N)}
              </span>
            </td>
            <td className="col-11">
              <span className="sticker__feed-value">
                {getRangeString(data.dataFeed?.fz_min_S,data.dataFeed?.fz_max_S)}
              </span>
            </td>
            <td className="col-12">
              <span className="sticker__feed-value">
                {getRangeString(data.dataFeed?.fz_min_H,data.dataFeed?.fz_max_H)}
              </span>
            </td>
            <td className="col-13">
              <span className="sticker__feed-value">
                {getRangeString(data.dataFeed?.fz_min_O,data.dataFeed?.fz_max_O)}
              </span>
            </td>
          </tr>

          <tr className="row-6">
            <td className="col-6"></td>
            <td className="col-7"></td>
            <td className="col-8"></td>
            <td className="col-9"></td>
            <td className="col-10"></td>
            <td className="col-11"></td>
            <td className="col-12"></td>
            <td className="col-13"></td>
          </tr>

          <tr className="row-7">
            <td className="col-6"></td>
            <td className="col-7"></td>
            <td className="col-8"></td>
            <td className="col-9"></td>
            <td className="col-10"></td>
            <td className="col-11"></td>
            <td className="col-12"></td>
            <td className="col-13"></td>
          </tr>

          <tr className="row-8">
            <td className="col-6"></td>
            <td className="col-7"></td>
            <td className="col-8"></td>
            <td className="col-9"></td>
            <td className="col-10"></td>
            <td className="col-11"></td>
            <td className="col-12" colSpan="2">
              <span className="sticker__order-number">
                {data.orderNumber}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Sticker;