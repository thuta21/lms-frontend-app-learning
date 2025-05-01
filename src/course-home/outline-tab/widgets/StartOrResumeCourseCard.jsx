import React from 'react';
// import { Button, Card } from '@openedx/paragon';
import { Card } from '@openedx/paragon';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import { useSelector } from 'react-redux';
import { sendTrackingLogEvent } from '@edx/frontend-platform/analytics';
import messages from '../messages';
import { useModel } from '../../../generic/model-store';

const StartOrResumeCourseCard = ({ intl }) => {
  const {
    courseId,
  } = useSelector(state => state.courseHome);

  const {
    org,
  } = useModel('courseHomeMeta', courseId);

  const eventProperties = {
    org_key: org,
    courserun_key: courseId,
  };

  const {
    resumeCourse: {
      hasVisitedCourse,
      url: resumeCourseUrl,
    },
  } = useModel('outline', courseId);

  if (!resumeCourseUrl) {
    return null;
  }

  const logResumeCourseClick = () => {
    sendTrackingLogEvent('edx.course.home.resume_course.clicked', {
      ...eventProperties,
      event_type: hasVisitedCourse ? 'resume' : 'start',
      url: resumeCourseUrl,
    });
  };

  return (
    <Card className={`mb-3 raised-card${hasVisitedCourse ? ' has-visited-course' : ''}`} data-testid="start-resume-card">
      <Card.Header
        title={hasVisitedCourse ? intl.formatMessage(messages.resumeBlurb) : intl.formatMessage(messages.startBlurb)}
        actions={(
          <button
            type="button"
            style={{
              backgroundColor: '#228B22',
              border: 'none',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
            }}
            onClick={() => logResumeCourseClick()}
          >
            {hasVisitedCourse ? intl.formatMessage(messages.resume) : intl.formatMessage(messages.start)}
          </button>

          // <Button
          //   variant="brand"
          //   block
          //   href={resumeCourseUrl}
          //   onClick={() => logResumeCourseClick()}
          //   className="mt-2"
          // >
          //   {hasVisitedCourse ? intl.formatMessage(messages.resume) : intl.formatMessage(messages.start)}
          // </Button>
        )}
      />
      {/* Footer is needed for internal vertical spacing to work out. If you can remove, be my guest */}
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      {/* <Card.Footer className="pt-1"><></></Card.Footer> */}
    </Card>
  );
};

StartOrResumeCourseCard.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(StartOrResumeCourseCard);
