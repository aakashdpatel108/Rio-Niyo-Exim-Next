import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Logos1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="logos1-container1 thq-section-padding">
        <div className="logos1-thq-max-width-elm thq-section-max-width">
          <h2 className="logos1-text thq-heading-2">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_U3yty0'),
              }}
            ></span>
          </h2>
          <div className="thq-grid-6">
            <img
              alt={props.logo1Alt}
              src={props.logo1Src}
              className="logos1-thq-logo1-elm thq-img-ratio-16-9"
            />
            <img
              alt={props.logo2Alt}
              src={props.logo2Src}
              className="logos1-thq-logo2-elm thq-img-ratio-16-9"
            />
            <img
              alt={props.logo3Alt}
              src={props.logo3Src}
              className="logos1-thq-logo3-elm thq-img-ratio-16-9"
            />
            <img
              alt={props.logo4Alt}
              src={props.logo4Src}
              className="logos1-thq-logo4-elm thq-img-ratio-16-9"
            />
            <img
              alt={props.logo5Alt}
              src={props.logo5Src}
              className="logos1-thq-logo5-elm thq-img-ratio-16-9"
            />
            <img
              alt={props.logo6Alt}
              src={props.logo6Src}
              className="logos1-thq-logo6-elm thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logos1-container1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .logos1-thq-max-width-elm {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .logos1-text {
            font-size: 36px;
            text-align: center;
          }
          .logos1-thq-logo1-elm {
            object-fit: contain;
          }
          .logos1-thq-logo2-elm {
            object-fit: contain;
          }
          .logos1-thq-logo3-elm {
            object-fit: contain;
          }
          .logos1-thq-logo4-elm {
            object-fit: contain;
          }
          .logos1-thq-logo5-elm {
            object-fit: contain;
          }
          .logos1-thq-logo6-elm {
            object-fit: contain;
          }
          @media (max-width: 1600px) {
            .logos1-text {
              font-size: 36px;
            }
          }
          @media (max-width: 1200px) {
            .logos1-text {
              font-size: 36px;
            }
          }
          @media (max-width: 991px) {
            .logos1-text {
              font-size: 36px;
            }
          }
          @media (max-width: 767px) {
            .logos1-container1 {
              gap: var(--dl-layout-space-twounits);
            }
            .logos1-thq-max-width-elm {
              gap: var(--dl-layout-space-twounits);
            }
            .logos1-text {
              font-size: 25px;
            }
          }
          @media (max-width: 344px) {
            .logos1-text {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

Logos1.defaultProps = {
  logo3Alt: 'Vegetables Export Logo',
  logo4Alt: 'Spices Export Logo',
  logo1Alt: 'RioNiyo Logo',
  logo6Alt: 'Logo6',
  logo2Alt: 'Fruits Export Logo',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
  logo5Alt: 'Logo5',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
}

Logos1.propTypes = {
  logo3Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo3Src: PropTypes.string,
  logo4Src: PropTypes.string,
  logo5Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo1Src: PropTypes.string,
  logo6Src: PropTypes.string,
}

export default Logos1
