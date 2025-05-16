import { Button, NightModeToggle } from '../../../buttons';
import { Card, Section } from '../../../containers';
import FooterComponent from '../../../footer.component';
import HeaderComponent from '../../../header.component';
import { FormDatePicker, FormTextInput } from '../../../inputs';
import useJulianConverterPage from './useJulianConverterPage';

export default function JulianConverterPage() {
  const {
    convertType,
    julianDateValue,
    regularDateValue,
    setConvertType,
    setJulianDateValue,
    setRegularDateValue,
    computeJulianDateValue,
    computeRegularDateValue
  } = useJulianConverterPage();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50 flex flex-col">
      <HeaderComponent ShowDescription={false} EnableLink={true} />
      <NightModeToggle />
      <Section className="flex flex-col gap-4 p-10">
        <Section.Title>
          <Section.Title.Gradient>Julian Date Converter Tool</Section.Title.Gradient>
        </Section.Title>
        <Section.Content className="flex flex-col gap-3 p-4 text-xl fhd:text-base">
          <p>About This Tool - a simple app that converts regular date into julian date format and vise versa</p>
          <p>
            About Julian Date - a simplified date format that represents the number of days since the start of the year
          </p>
          <p>How to use this tool:</p>
          <ul className="list-inside list-disc">
            <li>select an option whether you want &quot;Date to Julian&quot; or &quot;Julian to Date&quot;</li>
            <li>
              For Date to Julian:
              <ul className="list-inside pl-8">
                <li>
                  - Select a Date from the Date Picker field on the <b>Regular Date</b> Field
                </li>
                <li>- Click &quot;Convert Regular Date to Julian&quot; button</li>
              </ul>
            </li>
            <li>
              For Julian to Date:
              <ul className="list-inside pl-8">
                <li>
                  - Input the Julian Date value on the <b>Julian Date</b> Field
                </li>
                <li>- Click &quot;Convert Julian Value to Date&quot; button</li>
              </ul>
            </li>
          </ul>
        </Section.Content>
        <Section.Content className="fhd:p-2 text-xl fhd:text-base">
          <button
            className={
              'rounded-t-full py-2 px-6 ' +
              (convertType == 'julian' ? 'bg-white dark:bg-gray-700' : 'bg-gray-200 dark:bg-black ')
            }
            onClick={() => setConvertType('julian')}
          >
            Date to Julian
          </button>
          <button
            className={
              'rounded-t-full py-2 px-6 ' +
              (convertType == 'regular' ? 'bg-white dark:bg-gray-700' : 'bg-gray-200 dark:bg-black ')
            }
            onClick={() => setConvertType('regular')}
          >
            Julian to Date
          </button>

          {convertType == 'julian' && (
            <Card className="flex flex-col gap-5 p-8 rounded-tl-none bg-white dark:bg-gray-700">
              <span className="text-2xl">Convert Regular Date to Julian</span>

              <div className="flex flex-row justify-center flex-wrap gap-4">
                <FormDatePicker
                  label="Regular Date:"
                  name="dtRegularDate"
                  selected={regularDateValue}
                  onChange={(date) => setRegularDateValue(date!)}
                />
                <Button onClick={computeJulianDateValue}>Convert Regular Date to Julian</Button>
                <FormTextInput
                  label="Julian Date:"
                  name="txtConvertedJulian"
                  value={julianDateValue}
                  disabled
                  placeholder="The equivalent Julian Value"
                />
              </div>
            </Card>
          )}

          {convertType == 'regular' && (
            <Card className="flex flex-col gap-5 p-8 rounded-tl-none bg-white dark:bg-gray-700">
              <span className="text-2xl">Convert Julian to Regular Date</span>

              <div className="flex flex-row justify-center flex-wrap gap-4">
                <FormTextInput
                  label="Julian Date:"
                  name="txtJulianDate"
                  placeholder="Enter Julian Value Here"
                  defaultValue={julianDateValue}
                  onChange={(evt) => setJulianDateValue(evt.target.value)}
                />
                <Button onClick={computeRegularDateValue}>Convert Julian Value to Date</Button>
                <FormTextInput
                  label="Regular Date:"
                  name="txtConvertedRegularDate"
                  value={!!julianDateValue === true ? regularDateValue.toDateString() : ''}
                  disabled
                  placeholder="The equivalent Regular Date"
                />
              </div>
            </Card>
          )}
        </Section.Content>
      </Section>
      <FooterComponent />
    </div>
  );
}
